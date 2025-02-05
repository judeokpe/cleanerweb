import React from 'react';
import './loadingAnimation.css'; // Import the CSS file for the animation

const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <span className="loading-text">CleanJet</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
