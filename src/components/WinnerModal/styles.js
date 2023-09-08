import styled from 'styled-components';

export const Modal = styled.dialog`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  border-radius: 8px;
  border: 1px solid #888;
  background-color: var(--ah-color-light);
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.8);
  top: 200px;
`;
