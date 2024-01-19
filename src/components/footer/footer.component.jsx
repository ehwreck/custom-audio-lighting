import React from 'react';
import './footer.styles.css';
import routes from '../../routes/routes';
import InteractiveLink from '../interactive_link/interactive_link.component';
import capitalize from '../../helpers/capitalize';
import LinkDropdown from '../link_dropdown/link_dropdown.component';

const Footer = (props) => {
  return (
    <div id="footer">
      <div className="container">
        <div id="company-footer">
          <h3>Custom Audio & Lighting</h3>
          <p>
            Experience the pinnacle of audio, lighting, and technology solutions
            with Custom Audio & Lighting. Our unwavering commitment to quality
            ensures that your vision becomes a reality. Trust us to transform
            your space into an immersive haven, where innovation meets unmatched
            expertise.
          </p>
        </div>
        <div id="resources-footer">
          <h3>Resources</h3>
          <ul>
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
                  className="footer-link"
                  text={capitalize(route.name)}
                />
              );
            })}
          </ul>
        </div>

        <div id="contact-us-footer">
          <h3>Contact Us</h3>
          <ul>
            <li>support@customaudiolighting.com</li>
            <li>2709 N 45th St</li>
            <li>McAllen, TX 78501</li>
            <li>+1 (956) 624-2463</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
