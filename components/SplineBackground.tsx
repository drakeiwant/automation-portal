
import React from 'react';

const SplineBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <iframe 
        src='https://my.spline.design/particles-24w4ZqTYUWW1kk1oPIk84poO/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        className="scale-110"
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none"></div>
    </div>
  );
};

export default SplineBackground;
