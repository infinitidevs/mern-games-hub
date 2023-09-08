import React from 'react';

import { Modal } from './styles';

const WinnerModal = ({ text, resetGame, continueGame = null }) => {
  const handleReset = () => {
    resetGame();
  };

  return (
    <Modal open>
      <h2>{text}</h2>
      <section>
        <button type="button" onClick={handleReset}>
          Restart Game
        </button>
        {continueGame ? (
          <button type="button" onClick={continueGame}>
            Correct your solution
          </button>
        ) : null}
      </section>
    </Modal>
  );
};

export default WinnerModal;
