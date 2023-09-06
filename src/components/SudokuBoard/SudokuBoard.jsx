import confetti from 'canvas-confetti';
import React, { useEffect, useRef, useState } from 'react';
import { makepuzzle, solvepuzzle } from 'sudoku';

import { isSudokuCompleted, isSudokuCorrect } from '../../utils/sudoku';
import WinnerModal from '../WinnerModal/WinnerModal';
import { BtnWrapper, Container, SudokuWrapper } from './styles';

const SudokuBoard = () => {
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const isCompleted = useRef(false);
  const [modalText, setModalText] = useState('');
  const [displayBoard, setDisplayBoard] = useState([]);

  useEffect(() => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
    setDisplayBoard(newBoard);
  }, []);

  const resetGame = () => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
    setDisplayBoard(newBoard);
    isCompleted.current = false;
    setModalText('');
  };

  const handleInputChange = (e) => {
    const newBoard = [...displayBoard];
    const inputIndex = e.target.id;
    const inputValue = e.target.value === '' ? null : Number(e.target.value);

    newBoard[inputIndex] = inputValue;
    setDisplayBoard(newBoard);
    isCompleted.current = isSudokuCompleted(newBoard);
  };

  const renderSudoku = (sudokuDisplayBoard) => {
    if (!sudokuDisplayBoard) return null;

    const renderedSudoku = sudokuDisplayBoard.map((sudokuInput, index) => {
      const isGiven = sudokuInput == sudokuBoard[index] && sudokuInput !== null;
      const value = sudokuInput === null ? '' : sudokuInput;

      return (
        <input
          type="number"
          className="cell"
          id={index}
          value={value}
          disabled={isGiven}
          min="0"
          step="1"
          max="9"
          onChange={handleInputChange}
          key={index}
        />
      );
    });
    return renderedSudoku;
  };

  const solveSudoku = () => {
    const solution = solvepuzzle(sudokuBoard);
    setDisplayBoard(solution);
  };

  const validateSudoku = () => {
    const isCorrect = isSudokuCorrect(sudokuBoard, displayBoard);
    if (isCorrect) {
      confetti();
      setModalText('You made it, your sudoku is correct');
    } else {
      setModalText('Your solution was incorrect');
    }
  };

  return (
    <Container>
      {modalText === '' ? null : (
        <WinnerModal
          text={modalText}
          resetGame={resetGame}
          continueGame={() => {
            setModalText('');
          }}
        />
      )}
      <SudokuWrapper>{renderSudoku(displayBoard)}</SudokuWrapper>
      <BtnWrapper>
        <button type="button" onClick={validateSudoku} disabled={!isCompleted.current}>
          Validate sudoku
        </button>
        <button type="button" onClick={solveSudoku}>
          Solve sudoku
        </button>
        <button type="button" onClick={resetGame}>
          Reset sudoku
        </button>
      </BtnWrapper>
    </Container>
  );
};

export default SudokuBoard;
