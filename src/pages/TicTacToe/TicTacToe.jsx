import React, { useState } from 'react';

import HomeReturn from '../../components/HomeReturn/HomeReturn';
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
      <HomeReturn />
    </Container>
  );
};

export default TicTacToe;
