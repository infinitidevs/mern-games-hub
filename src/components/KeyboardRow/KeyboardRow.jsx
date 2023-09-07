import React from 'react';

import { BtnHangman } from './styles';

const KeyboardRow = ({ characters, onClickLetter, enteredList }) => {
  return (
    <>
      {characters.split('').map((character) => {
        const wasPressed = enteredList.includes(character);
        return (
          <BtnHangman
            type="button"
            key={character}
            onClick={() => {
              onClickLetter(character);
            }}
            disabled={wasPressed}
          >
            {character}
          </BtnHangman>
        );
      })}
    </>
  );
};

export default KeyboardRow;
