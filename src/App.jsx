import { HeaderWrapper } from './App.styles';
import Hangman from './pages/Hangman/Hangman';
import Home from './pages/Home/Home';
import Sudoku from './pages/Sudoku/Sudoku';
import TicTacToe from './pages/TicTacToe/TicTacToe';

const App = () => {
  return (
    <div>
      <HeaderWrapper>
        <h1>Games Hub</h1>
        <Home />
        <TicTacToe />
        <Hangman />
        <Sudoku />
      </HeaderWrapper>
    </div>
  );
};

export default App;
