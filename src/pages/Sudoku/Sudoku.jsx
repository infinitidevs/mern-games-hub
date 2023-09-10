import React, { useState } from 'react';

import HomeReturn from '../../components/HomeReturn/HomeReturn';
import SudokuBoard from '../../components/SudokuBoard/SudokuBoard';
import { Container, Heading } from './styles';

const Sudoku = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <Container>
      <Heading>
        <h2>Play Sudoku</h2>
        <button type="button" onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'End Game' : 'Start Game'}
        </button>
      </Heading>
      {isStarted ? <SudokuBoard /> : null}
      <HomeReturn />
    </Container>
  );
};

export default Sudoku;
