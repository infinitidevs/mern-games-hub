import confetti from 'canvas-confetti';
import React, { useEffect, useRef, useState } from 'react';

import { CHARACTERS, MAX_TRIALS } from '../../constants/hangman';
import { checkWordComplete, printWord, randomWord } from '../../utils/hangman';
import HangmanIcon from '../HangmanIcon/HangmanIcon';
import KeyboardRow from '../KeyboardRow/KeyboardRow';
import WinnerModal from '../WinnerModal/WinnerModal';
import { Keyboard, Wrapper } from './styles';

let modalText = '';

const HangmanBoard = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [enteredLetters, setEnteredLetters] = useState([]);
  const [displayedWord, setDisplayedWord] = useState('');
  const wrongTries = useRef(0);
  const gameOver = useRef(null);

  const resetGame = () => {
    setSelectedWord(randomWord());
    setEnteredLetters([]);
    wrongTries.current = 0;
    gameOver.current = null;
    modalText = '';
  };

  const handleKeyPress = (character) => {
    const newLettersList = [...enteredLetters, character];
    const isInSelectedWord = selectedWord.split('').includes(character);
    setEnteredLetters(newLettersList);
    if (!isInSelectedWord) {
      wrongTries.current += 1;
      if (wrongTries.current === MAX_TRIALS) {
        gameOver.current = true;
        modalText = `You've lost :( the word was: ${selectedWord}`;
      }
      return;
    }
    const newDisplayedWord = printWord(selectedWord, newLettersList);
    setDisplayedWord(newDisplayedWord);
    const isWinner = checkWordComplete(newDisplayedWord);
    if (isWinner) {
      confetti();
      gameOver.current = true;
      modalText = 'You found the word!!';
    }
  };

  useEffect(() => {
    const newWord = randomWord();
    setSelectedWord(newWord);
  }, []);

  useEffect(() => {
    setDisplayedWord(printWord(selectedWord, enteredLetters));
  }, [selectedWord]);

  return (
    <Wrapper>
      <h2>Word: {displayedWord}</h2>
      {gameOver.current ? <WinnerModal text={modalText} resetGame={resetGame} /> : null}
      <HangmanIcon wrongTries={wrongTries} />
      <Keyboard id="keyboard">
        <KeyboardRow
          onClickLetter={handleKeyPress}
          characters={CHARACTERS}
          enteredList={enteredLetters}
        />
      </Keyboard>
    </Wrapper>
  );
};

export default HangmanBoard;
