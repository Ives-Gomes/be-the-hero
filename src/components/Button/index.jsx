import React from 'react';

import ButtonStyles from './styles';

function Button({ type, children }) {
  return (
    <ButtonStyles
      type={type}
    >
      {children}
    </ButtonStyles>
  );
}

export default Button;
