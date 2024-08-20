import React from 'react';
import { Box, Container, Typography } from '@mui/material'

export default function Home() {

  return (
    <Container>
      <div
        styles={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          paddingTop: 5
        }}
      >
        <Typography>
          Hello, my name is Jonathan Coulter
        </Typography>
      </div>
    </Container>
  );
}