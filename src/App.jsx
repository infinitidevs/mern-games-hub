import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HeaderWrapper } from './App.styles';
import { AuthLayout } from './layouts/AuthLayout';
import { FreeLayout } from './layouts/FreeLayout';
import { Login } from './pages/Login/Login';

const Home = lazy(() => import('./pages/Home/Home'));
const TicTacToe = lazy(() => import('./pages/TicTacToe/TicTacToe'));
const Hangman = lazy(() => import('./pages/Hangman/Hangman'));
const Sudoku = lazy(() => import('./pages/Sudoku/Sudoku'));

const App = () => {
  return (
    <>
      <HeaderWrapper>
        <img src="/src/assets/favicon/favicon.ico" alt="Logo" />
        <h1>Games Hub</h1>
      </HeaderWrapper>
      <main>
        <Routes>
          <Route element={<FreeLayout />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route
              path="home"
              element={
                <React.Suspense fallback={<h2>Loading...</h2>}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route
              path="tictactoe"
              element={
                <React.Suspense fallback={<h2>Loading...</h2>}>
                  <TicTacToe />
                </React.Suspense>
              }
            />
            <Route
              path="hangman"
              element={
                <React.Suspense fallback={<h2>Loading...</h2>}>
                  <Hangman />
                </React.Suspense>
              }
            />
            <Route
              path="sudoku"
              element={
                <React.Suspense fallback={<h2>Loading...</h2>}>
                  <Sudoku />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
