import { styled } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  > a {
    display: flex;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    background-color: var(--ah-color-500);
    color: var(--ah-color-light);
    cursor: pointer;
    width: 30px;
    height: auto;

    > img {
      width: 30px;
      height: 30px;
      filter: invert(1);
    }
  }

  > a:hover {
    border-color: var(--ah-color-400);
    color: var(--ah-color-300);
    background-color: var(--ah-color-700);
  }
`;

export const Heading = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  > h2 {
    color: var(--ah-color-200);
  }

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    gap: 2rem;

    > h2 {
      font-size: 18px;
    }
  }
`;
