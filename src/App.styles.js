import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > h1 {
    @media screen and (max-width: 425px) {
      font-size: 2rem;
    }
  }
`;
