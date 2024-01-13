import React from 'react';
import './nav_menu.styles.css';

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
          <ul id="options">
            <li>About</li>
            <li class="active">Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
