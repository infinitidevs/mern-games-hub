import styled from 'styled-components';

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;
  max-width: 300px;
  background: var(--ah-color-dark);
  color: var(--ah-color-light);
  box-shadow: var(--ah-color-boxshadow-primary) 0 0 20px,
    var(--ah-color-boxshadow-secondary) 0 0 6px;
  border-radius: 12px;
  transition: 0.3s;
`;

export const Image = styled.img`
  height: 184px;
  border-radius: 8px;
  object-fit: cover;
`;

export const Description = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const Heading = styled.h3`
  color: var(--ah-color-250);
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
`;

export const Summary = styled.p`
  color: var(--ah-color-200);
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  text-align: left;
  margin: 0;
`;

export const ButtonWrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
`;

export const Cancel = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  color: #8c92c0;
`;

export const CTAButton = styled.button`
  padding: 8px 32px;
  gap: 10px;
  color: white;
  background: #3adb92;
  border-radius: 4px;

  :hover {
    background: #1bc578;
  }
`;
