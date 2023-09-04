import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/Card';
import links from '../../constants/home';
import { CardsWrapper, Container, Heading } from './Styles';

const Home = () => {
  return (
    <Container>
      <Heading>
        <h2>Select a game</h2>
      </Heading>
      <CardsWrapper>
        {links.map(({ url, heading, image, text }) => (
          <Link to={url} key={url}>
            <Card heading={heading} image={image} text={text} />
          </Link>
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default Home;
