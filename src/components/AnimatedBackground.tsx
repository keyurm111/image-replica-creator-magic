
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <DotLottieReact
        src="https://lottie.host/1c96b6b6-734c-493e-9b29-d59644d05897/YQKMomollh.json"
        loop
        autoplay
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AnimatedBackground;
