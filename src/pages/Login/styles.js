import { styled } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 320px;
  height: 450px;
  border-radius: 20px;
  box-shadow: var(--ah-color-boxshadow-primary) 0 0 20px,
    var(--ah-color-boxshadow-secondary) 0 0 6px;

  > h2 {
    font-size: 24px;
    color: var(--ah-color-300);
  }
`;
