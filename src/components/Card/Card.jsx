import React from 'react';

import { CardContainer, Description, Heading, Image, Summary } from './styles';

const Card = ({ image, heading, text }) => {
  return (
    <CardContainer>
      <Image src={image} />
      <Description>
        <Heading>{heading}</Heading>
        <Summary>{text}</Summary>
      </Description>
    </CardContainer>
  );
};

export default Card;
