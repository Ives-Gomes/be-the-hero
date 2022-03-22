import React from 'react';
import { Link } from 'react-router-dom';

import LinkStyles from './styles';

function LinkComponent({ to, children }) {
  return (
    <LinkStyles>
      <Link to={to}>
        {children}
      </Link>
    </LinkStyles>
  );
}

export default LinkComponent;
