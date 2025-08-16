import React, { useCallback, useMemo, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import Resume from './pages/Resume/Resume';
import Teaching from './pages/Teaching/Teaching';

import './App.css'
import './index.css'

export default function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [engineReady, setEngineReady] = useState(false)

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setEngineReady(true))
  }, [])

  const particlesOptions = useMemo(() => ({
    fpsLimit: 60,
    background: { color: { value: "#fdfdff" } },
    fullScreen: { enable: false },
    particles: {
      number: { value: 100, density: { enable: true, area: 800 } },
      color: { value: "#7d99ff" },
      links: { enable: true, color: "#7d99ff", distance: 150, opacity: 0.35, width: 1 },
      move: { enable: true, speed: 0.5, outModes: { default: "out" } },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 3 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.3 } }
    },
    detectRetina: true,
  }), [])

  const particlesElement = useMemo(() => {
    if (!engineReady) return null
    return (
      <div className='particles-bg'>
        <Particles id="tsparticles" options={particlesOptions} />
      </div>
    )
  }, [engineReady, particlesOptions])

  const renderContent = () => {
    switch (currentTab) {
      case 'resume':
        return <Resume />
      case 'teaching':
        return <Teaching />
      case 'home':
      default:
        return <Home />
    }
  }

  return (
    <Container className='top-50'>
      {particlesElement}
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs className='content-layer'>
          <Header currentTab={currentTab} onChangeTab={setCurrentTab} />
          <div className='main-content container-shadow'>
            {renderContent()}
          </div>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
