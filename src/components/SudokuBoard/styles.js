import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--ah-color-boxshadow-primary) 0 0 20px,
    var(--ah-color-boxshadow-secondary) 0 0 6px;
`;

export const SudokuWrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(9, 1fr);
  justify-items: center;
  align-items: center;
  padding: 1rem;

  > input {
    font-size: 1.5rem;
    padding: 0.9rem;
    text-align: center;
    width: 1ch;
    height: 1ch;
    background: var(--ah-color-500);
    color: var(--ah-color-200);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input:disabled {
    color: var(--ah-color-300);
  }
`;

export const BtnWrapper = styled.section`
  display: flex;
  gap: 8px;
`;
