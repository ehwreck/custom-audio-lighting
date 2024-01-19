import React from 'react';
import './bottom_bar.styles.css';

const BottomBar = ({ companyName }) => {
  return (
    <div className="bottom-bar">
      © 2024 All Rights Reserved | {companyName} | Designed & Developed by Erick
      E. Trevino
    </div>
  );
};

export default BottomBar;
