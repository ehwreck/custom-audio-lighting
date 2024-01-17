import React, { useState } from 'react';

const InteractiveButton = (props) => {
  const { text } = props;

  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={hovered ? 'hovered' : ''}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </button>
  );
};

export default InteractiveButton;
