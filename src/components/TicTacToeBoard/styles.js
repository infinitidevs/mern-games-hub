import styled from 'styled-components';

export const Container = styled.article`
  max-width: 400px;
  width: 100%;
`;

export const TTTBoardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.5rem;
  @media screen and (min-width: 321px) and (max-width: 425px) {
    padding: 2.5rem;
  }
`;

export const PlayerName = styled.p`
  font-size: 28px;
  color: var(--ah-color-light);
`;

export const TTTButton = styled.button`
  background: var(--ah-color-500);
  font-weight: bold;
  color: var(--ah-color-250);
  padding: 1rem;
  text-align: center;
  font-size: 3.5rem;
  height: 113px;
  box-shadow: var(--ah-color-boxshadow-primary) 0 0 20px,
    var(--ah-color-boxshadow-secondary) 0 0 6px;

  :disabled {
    background-color: var(--ah-color-250);
  }

  @media screen and (max-width: 425px) {
    max-height: 60px;
    max-width: 60px;
    font-size: 2rem;
  }
`;
