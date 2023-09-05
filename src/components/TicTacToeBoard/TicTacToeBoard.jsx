import confetti from 'canvas-confetti';
import React, { useRef, useState } from 'react';

import { INITIAL_BOARD, PLAYERS } from '../../constants/tictactoe';
import checkWinner, { checkDraw, randomPlayer } from '../../utils/tictactoe';
import WinnerModal from '../WinnerModal/WinnerModal';
import { Container, PlayerName, TTTBoardWrapper, TTTButton } from './styles';

let modalText = '';

const TicTacToeBoard = () => {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const turn = useRef(randomPlayer());
  const winner = useRef(null);

  const resetGame = () => {
    setBoard(INITIAL_BOARD);
    turn.current = randomPlayer();
    winner.current = null;
    modalText = '';
  };

  const handleBoardChange = (id) => {
    const player = turn.current;
    const [row, column] = id.split('-');
    const isCellEmpty = !board[row][column];

    if (isCellEmpty) {
      const newBoard = structuredClone(board);
      newBoard[row][column] = player;
      setBoard(newBoard);

      const newTurn = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
      turn.current = newTurn;

      const newWinner = checkWinner(newBoard, player);
      if (newWinner) {
        confetti();
        winner.current = newWinner;
        modalText = `Player ${newWinner} won!!`;
      } else if (checkDraw(newBoard)) {
        winner.current = 'draw';
        modalText = 'There is a draw :(';
      }
    }
  };

  const renderBoard = () => {
    const boardView = board.map((row, rowIndex) => {
      return row.map((_, columnIndex) => {
        return (
          <TTTButton
            id={`${rowIndex}-${columnIndex}`}
            key={`${rowIndex}-${columnIndex}`}
            disabled={!!winner.current}
            onClick={(e) => {
              handleBoardChange(e.target.id);
            }}
          >
            {board[rowIndex][columnIndex]}
          </TTTButton>
        );
      });
    });
    return boardView;
  };

  return (
    <Container>
      {winner.current ? (
        <WinnerModal text={modalText} resetGame={resetGame} />
      ) : (
        <PlayerName>
          Player <b>{turn.current}</b> turn
        </PlayerName>
      )}
      <TTTBoardWrapper>{renderBoard()}</TTTBoardWrapper>
    </Container>
  );
};

export default TicTacToeBoard;
