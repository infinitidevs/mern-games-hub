import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TicTacToeBoard from '../../components/TicTacToeBoard/TicTacToeBoard';
import { Container, Heading } from './styles';

const TicTacToe = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <Container>
      <Heading>
        <h2>Play Tic-Tac-Toe</h2>
        <button type="button" onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'End Game' : 'Start Game'}
        </button>
      </Heading>
      {isStarted ? <TicTacToeBoard /> : null}
      <Link to="/">
        <img src="/src/assets/home.svg" alt="Home Icon" type="xml/svg" />
      </Link>
    </Container>
  );
};

export default TicTacToe;
