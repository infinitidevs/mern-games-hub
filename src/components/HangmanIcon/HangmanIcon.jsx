import React from 'react';

import { hangmanPaths } from '../../constants/hangman';
import { Icon } from './styles';

const HangmanIcon = ({ wrongTries }) => {
  return (
    <div>
      <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3300 2550">
        {hangmanPaths.slice(0, wrongTries.current).map(({ d, transform }, index) => (
          <path d={d} transform={transform} key={index} />
        ))}
      </Icon>
    </div>
  );
};

export default HangmanIcon;
