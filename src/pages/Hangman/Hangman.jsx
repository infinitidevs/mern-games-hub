import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HangmanBoard from '../../components/HangmanBoard/HangmanBoard';
import { Container, Heading } from './styles';

const Hangman = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <Container>
      <Heading>
        <h2>Play Hangman</h2>
        <button type="button" onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'End Game' : 'Start Game'}
        </button>
      </Heading>
      {isStarted ? <HangmanBoard /> : null}
      <Link to="/">
        <img src="/src/assets/home.svg" alt="Home Icon" type="svg" />
      </Link>
    </Container>
  );
};

export default Hangman;
