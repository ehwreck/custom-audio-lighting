import React, { useEffect, useState } from 'react';

const InteractiveBox = (props) => {
  const { text, imageURL } = props;

  const [hovered, setHovered] = useState(false);

  useEffect(() => {});

  return (
    <div
      style={{
        background: `no-repeat 50% 50% / cover url(${imageURL})`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={hovered ? 'hovered' : ''}
    >
      <h2>{text}</h2>
      <p>Learn more</p>
    </div>
  );
};

export default InteractiveBox;
