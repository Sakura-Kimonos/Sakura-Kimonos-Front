import React from 'react';
import Lottie from 'lottie-react';
import sakuraAnimation from '../assets/animation/sakura.json';


function SakuraAnimation() {
  return (
    <div className="lottie-container">
      <Lottie
        animationData={sakuraAnimation}
        autoplay
        loop
        style={{height: '100px'}}
      />
    </div>
  );
}


  export default SakuraAnimation;
  