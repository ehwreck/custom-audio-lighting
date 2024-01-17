import React from 'react';
import './home.styles.css';
import NavMenu from '../components/nav_menu/nav_menu.component';
import InteractiveBox from '../components/interactive_box/interactive_box.component';
import BottomBar from '../components/bottom_bar.component.jsx/bottom_bar.component';
import Footer from '../components/footer/footer.component';
import lightingImg from '../assets/images/vecteezy_eco-friendly-solar-lights-brightening-the-outdoors_28638915_662.jpg';

const Home = (props) => {
  return (
    <React.Fragment>
      <NavMenu
        companyName="Custom Audio & Lighting"
        companyMotto="Your spaces done right!"
      />
      <div id="home">
        <div className="full_view_container">
          <div className="animated_background"></div>
          <h1 className="dark_background">
            Leading Audio, Video & Lighting in the RGV
          </h1>
          <p className="dark_background">
            We are your premier destination for creating unforgettable,
            immersive, and cutting-edge entertainment experiences.
          </p>
        </div>
        <div id="work-cta">
          <h3>Unmatched performance. Jaw-dropping designs.</h3>
          <hr className="hr-separator" />
        </div>
        <h2>Quality work. Auditory & visual differences.</h2>
        <div className="wrappable_services">
          <InteractiveBox
            text="Audio"
            imageURL="https://images.unsplash.com/photo-1633455711664-16bad5edb375?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // imageURL="https://images.unsplash.com/photo-1531104985437-603d6490e6d4?q=80&w=2639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <InteractiveBox
            text="Video"
            imageURL="https://images.unsplash.com/photo-1699134816591-b4104e23eaa9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <InteractiveBox text="Lighting" imageURL={lightingImg} />
          <InteractiveBox
            text="Networking"
            imageURL="https://images.unsplash.com/photo-1551703599-2a53f65da7e7?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div></div>
      </div>
      <Footer />
      <BottomBar companyName="Custom Audio & Lighting" />
    </React.Fragment>
  );
};

export default Home;
