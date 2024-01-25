import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPostion';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const InteractiveBox = (props) => {
  const { text, imageURL, path } = props;
  
  const element = useRef(null);
  
  const { width, height } = useWindowDimensions();
  const mobileDevice = width < 1200;
  const scrollPosition = useScrollPosition();
  
  const [hovered, setHovered] = useState(false);
    
  useDidUpdateEffect(()=>{
    const {top, bottom} = element.current.getBoundingClientRect();
    if(mobileDevice && (top >= height/6 && bottom <= height/6*5)){
      setHovered(true);
    }else{
      setHovered(false);
    }
  },[mobileDevice, scrollPosition])

  // onMouseEnter & onMouseLeave handlers
  const onMouseEnterHandler = () => {
    if(!mobileDevice) setHovered(true);
  }

  const onMouseLeaveHandler = () => {
    if(!mobileDevice) setHovered(false);
  }

  return (
    <div
      style={{
        background: `no-repeat 50% 50% / cover url(${imageURL})`,
      }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className={hovered ? 'hovered' : ''}
      ref={element}
    >
      <div>
        <h3>{text}</h3>
        <Link to={path}>Learn more</Link>
      </div>
    </div>
  );
};

export default InteractiveBox;
