import { solvepuzzle } from 'sudoku';

export const isSudokuCompleted = (board) => !board.includes(null);

export const isSudokuCorrect = (sudokuBoard, displayBoard) => {
  const solution = solvepuzzle(sudokuBoard);
  return solution.every((value, index) => value === displayBoard[index]);
};
