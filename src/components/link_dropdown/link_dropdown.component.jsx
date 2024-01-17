import React from 'react';
import { Link } from 'react-router-dom';
import capitalize from '../../helpers/capitalize';

const LinkDropdown = (props) => {
  const {
    route,
    route: { children },
  } = props;
  return (
    <React.Fragment>
      <Link to={route.path}>{capitalize(route.name)}</Link>
      {children.map((child) => {
        if (child.type === 'dropdown-link')
          return <LinkDropdown route={child} />;
        return (
          <Link to={route.path + child.path}>{capitalize(child.name)}</Link>
        );
      })}
    </React.Fragment>
  );
};

export default LinkDropdown;
