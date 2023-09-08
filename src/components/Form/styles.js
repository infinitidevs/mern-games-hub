import { styled } from 'styled-components';

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    background-color: var(--ah-color-500);
    color: var(--ah-color-300);
    border-radius: 12px;
    border: 0;
    font-size: 18px;
    outline: 0;
    padding: 4px 20px 0;
    height: 50px;
    width: 280px;
  }

  input:invalid {
    border: solid var(--ah-color-250);
  }

  button {
    background-color: var(--ah-color-500);
    border-radius: 12px;
    font-size: 18px;
    text-align: center;
    outline: 0;
    height: 50px;
    width: 100%;
  }

  button:hover {
    background-color: var(--ah-color-700);
  }
`;

export const InputsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
