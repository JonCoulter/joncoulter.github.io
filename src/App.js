import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';

import './App.css'
import './index.css'

export default function App() {
  return (
    <Container className='top-60'>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
