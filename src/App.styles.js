import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > img {
    filter: drop-shadow(2px 4px 6px var(--ah-color-700));
  }

  > h1 {
    @media screen and (max-width: 425px) {
      font-size: 2rem;
    }
  }
`;
