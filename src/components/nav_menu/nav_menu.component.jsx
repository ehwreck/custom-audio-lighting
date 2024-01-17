import React from 'react';
import './nav_menu.styles.css';
import LinkDropdown from '../link_dropdown/link_dropdown.component';
import { Link } from 'react-router-dom';
import routes from '../../routes/routes';

const NavMenu = (props) => {
  const { showLogo, logoURL, logoAltText, companyName, companyMotto } = props;

  return (
    <div id="main_header">
      <div className="nav_menu_container">
        <div id="left_nav_section">
          {showLogo && (
            <img id="nav_menu_logo" src={logoURL} alt={logoAltText} />
          )}
          <div id="company_label">
            <span id="nav_menu_name">{companyName}</span>
            <span id="nav_menu_motto">{companyMotto}</span>
          </div>
        </div>
        <div id="right_nav_section">
          <div id="options">
            {
            routes.map(route => {
              if(route.type === "dropdown-link"){
                return <LinkDropdown route={route}>{route.name}</LinkDropdown>
              }
              return <Link to={route.path}>{route.name}</Link>
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
