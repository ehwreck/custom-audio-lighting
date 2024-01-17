import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InteractiveLink = (props) => {
  const { path, text } = props;

  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={path}
      className={hovered ? 'hovered' : ''}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </Link>
  );
};

export default InteractiveLink;
