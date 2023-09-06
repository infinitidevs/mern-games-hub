import { HeaderWrapper } from './App.styles';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div>
      <HeaderWrapper>
        <h1>Games Hub</h1>
        <Home />
      </HeaderWrapper>
    </div>
  );
};

export default App;
