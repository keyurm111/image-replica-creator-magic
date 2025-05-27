
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <DotLottieReact
        src="https://lottie.host/4db68bbd-31f6-4cd8-b6c8-2a2b8b6b7e6e/jRVSupHrkH.json"
        loop
        autoplay
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AnimatedBackground;
