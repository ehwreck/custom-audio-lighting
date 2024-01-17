import React from 'react';
import { Link } from 'react-router-dom';

const LinkDropdown = (props) => {
  const { route, route: { children } } = props;
  return (
  <React.Fragment>
    <Link to={route.path}/>
    {
      children.map(child => {
        if(child.type === 'dropdown-link') return <LinkDropdown route={child}/>
        return <Link to={route.path + child.path}>{child.name}</Link>
      })
    }
  </React.Fragment>
  )
};

export default LinkDropdown;
