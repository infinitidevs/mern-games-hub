import React, { useState } from 'react';

import HangmanBoard from '../../components/HangmanBoard/HangmanBoard';
import HomeReturn from '../../components/HomeReturn/HomeReturn';
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
      <HomeReturn />
    </Container>
  );
};

export default Hangman;
