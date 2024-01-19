import React, { useState } from 'react';
import './interactive_button.styles.css';

const InteractiveButton = (props) => {
  const { text, type, className, clickHandler, href } = props;

  const [hovered, setHovered] = useState(false);

  const getClass = () => {
    return `i-button ${className} ${hovered ? 'hovered' : ''}`;
  };

  if (type === 'link') {
    return (
      <a
        className={getClass()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={href}
      >
        {text}
      </a>
    );
  }

  return (
    <input
      type={type}
      value={text}
      className={getClass()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={
        clickHandler
          ? (e) => clickHandler(e)
          : () => {
              return true;
            }
      }
      href={href}
      readOnly
    />
  );
};

InteractiveButton.defaultProps = {
  className: '',
};

export default InteractiveButton;
