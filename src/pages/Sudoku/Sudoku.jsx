import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/">
        <img src="/src/assets/home.svg" alt="Home Icon" type="svg" />
      </Link>
    </Container>
  );
};

export default Sudoku;
