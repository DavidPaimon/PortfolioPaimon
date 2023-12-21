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
    className='w-full h-full absolute translate-z-0'
    id='tsparticles' 
    init={particlesInit} 
    loaded={particlesLoaded} 
    options={{
    fullScreen: {enable: false},
    background: {
      color: {
        value: '',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 90
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        }
      }
    },
  }} 
  />
 );
};

export default ParticlesContainer;
