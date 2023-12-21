import {} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, {useCallBack} from 'react';

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallBack(async (engine) => {
    await loadFull(engine);   
  }, []);

  const particlesLoaded = useCallBack(async () => {}, []);

  return (
  <Particles
    id='tsparticles' 
    init={particlesInit} 
    loaded={particlesLoaded} 
    options={{
    fullScreen: {enable: false},
    background: {
      color: {
        value: ''
      },
    },
  }} 
  />
 );
};

export default ParticlesContainer;
