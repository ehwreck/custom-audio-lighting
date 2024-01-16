import React, { useEffect, useState } from 'react';

const InteractiveBox = (props) => {
  const { text, imageURL } = props;

  const [hovered, setHovered] = useState(false);

  useEffect(() => {});

  return (
    <div
      style={{
        background: `no-repeat 50% 50% / 100% url(${imageURL})`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={hovered ? 'hoverable-box hovered' : 'hoverable-box'}>
        <h2>{text}</h2>
        <p>Click to learn more</p>
      </div>
    </div>
  );
};

export default InteractiveBox;
