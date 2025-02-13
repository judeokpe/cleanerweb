import React from 'react';
import './loadingAnimation.css'; // Import the CSS file for the animation
import Image from 'next/image';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <span className="loading-text">
          <Image src="/logo.jpg" alt="logo" width={40} height={40} className="w-10 h-10 object-cover" />
        </span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
