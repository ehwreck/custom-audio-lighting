import React from 'react';
import './footer.styles.css';

const Footer = (props) => {
  return (
    <div id="footer">
      <div className="container">
        <div id="company-footer">
          <h3>Custom Audio & Lighting</h3>
          <p>
            Custom Audio & Lighting is your premier partner for bespoke audio,
            lighting, and video installations. Elevate your environment with our
            expert craftsmanship, tailored to your unique vision. From immersive
            audio experiences to dynamic lighting solutions, we bring innovation
            to every project. Beyond aesthetics, we also offer cutting-edge data
            and networking services, ensuring seamless connectivity. Illuminate,
            resonate, and connect with Custom Audio & Lighting - where
            customization meets excellence.
          </p>
        </div>
        <div id="services-footer">
          <h3>Services</h3>
          <ul>
            <li>Audio</li>
            <li>Video</li>
            <li>Lighting</li>
            <li>Data & Networking</li>
          </ul>
        </div>

        <div id="contact-us-footer">
          <h3>Contact Us</h3>
          <ul>
            <li>support@customaudiolighting.com</li>
            <li>4709 N 45th St</li>
            <li>McAllen, TX 78501</li>
            <li>+1 (956) 624-2463</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
