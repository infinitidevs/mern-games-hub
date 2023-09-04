import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Heading = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    color: var(--ah-color-200);
  }
`;

export const CardsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: 0.3s;
  :hover {
    background-color: var(--ah-color-700);
    border-radius: 12px;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;
