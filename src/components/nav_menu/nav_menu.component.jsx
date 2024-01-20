import React, {useEffect, useState} from 'react';
import './nav_menu.styles.css';
import LinkDropdown from '../link_dropdown/link_dropdown.component';
import { Link } from 'react-router-dom';
import routes from '../../routes/routes';
import capitalize from '../../helpers/capitalize.js';
import InteractiveButton from '../interactive_button/interactive_button.component.jsx';
import InteractiveLink from '../interactive_link/interactive_link.component.jsx';
import useWindowDimensions from '../../hooks/useWindowDimensions.js';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavMenu = (props) => {
  const { showLogo, logoURL, logoAltText, companyName, companyMotto } = props;
  const { width } = useWindowDimensions();

  const [showCollapsibleMenu, setShowCollapsibleMenu] = useState(width < 1200);
  const [collapsibleMenuOpen, setCollapsibleMenuOpen] = useState(false);

  useEffect(()=>{
    setShowCollapsibleMenu(width < 1200);
  }, [width]);

  return (
    <div id="main-header">
      <div id="nav-menu-container">
        <div id="left-nav-section">
          {showLogo && (
            <img id="nav_menu_logo" src={logoURL} alt={logoAltText} />
          )}
          <div id="company-label">
            <Link to="/">
              {companyName}
            </Link>
            <span>{companyMotto}</span>
          </div>
        </div>
        <div id='right-nav-section'>
          <div id='collapsible-icon' className={width < 1200 ? '' : ' hidden'}>
            <MenuIcon className={showCollapsibleMenu && !collapsibleMenuOpen ? '' : 'hidden'} onClick={()=>{setCollapsibleMenuOpen(true)}}/>
            <CloseIcon className={showCollapsibleMenu && collapsibleMenuOpen ? '' : 'hidden'} onClick={()=>{setCollapsibleMenuOpen(false)}}/>
          </div>
          <div id="options" className={!showCollapsibleMenu ? '' : (collapsibleMenuOpen ? '' : 'hidden')}>
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
            <InteractiveButton
              text="Contact Us"
              type="link"
              href="#contact-us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
