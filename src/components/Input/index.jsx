import React from 'react';

import InputStyles from './styles';

function Input({ type, placeholder, ...rest }) {
  return (
    <InputStyles
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default Input;
