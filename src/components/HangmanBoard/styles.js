import styled from 'styled-components';

export const Wrapper = styled.article`
  padding-bottom: 0;

  > h2 {
    font-size: xx-large;
    letter-spacing: 6px;
  }

  @media screen and (max-width: 500px) {
    padding-bottom: 6rem;

    > h2 {
      font-size: x-large;
    }
  }
`;

export const Keyboard = styled.section`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
  height: 197px;
  gap: 8px;

  @media screen and (max-width: 500px) {
    padding-top: 6rem;
  }
`;
