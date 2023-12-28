import React from 'react'
import particlesConfig from '../config/particles-config'
import Particles from 'react-tsparticles';

function ParticlesBackground() {
  return (
    <Particles id='tsparticles' params={particlesConfig}>
    </Particles>
  )
}

export default ParticlesBackground