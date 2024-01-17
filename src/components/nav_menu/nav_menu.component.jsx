import React from 'react';
import './nav_menu.styles.css';
import LinkDropdown from '../link_dropdown/link_dropdown.component';
import { Link } from 'react-router-dom';
import routes from '../../routes/routes';
import capitalize from '../../helpers/capitalize.js';
import InteractiveButton from '../interactive_button/interactive_button.component.jsx';
import InteractiveLink from '../interactive_link/interactive_link.component.jsx';

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
            <Link id="nav_menu_name" to="/">
              {companyName}
            </Link>
            <span id="nav_menu_motto">{companyMotto}</span>
          </div>
        </div>
        <div id="right_nav_section">
          <div id="options">
            {routes.slice(1).map((route) => {
              if (route.type === 'dropdown-link') {
                return (
                  <LinkDropdown route={route}>
                    {capitalize(route.name)}
                  </LinkDropdown>
                );
              }
              return (
                <InteractiveLink
                  path={route.path}
                  text={capitalize(route.name)}
                />
              );
            })}
            <InteractiveButton text="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
