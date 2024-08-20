import React from 'react';
import { Box, Container, Typography } from '@mui/material'
import Hobby from '../components/Hobby';

export default function Home() {

  const hobbies = [
    {
      title: 'Climbing',
      images: ['climbing_1.png', 'climbing_2.png'],
      description: 'I started climbing in the summer of 2023, and since then I have been completely addicted to the sport.'
    }
  ]

  return (
    <Container>
      <Box
        sx={{
          paddingTop: 3,
          height: '100vh'
        }}
        display= 'flex'
        flexDirection='column'
      >
        <Typography 
          variant="h4"
          marginBottom={3}
        >
          Hello, my name is Jonathan Coulter!
        </Typography>


        <Typography 
          variant="h6"
          marginBottom={3}
        >
          I am a Junior at the University of Pittsburgh studying Computer Science
        </Typography>

        <Typography 
          variant="h5"
          marginBottom={3}
        >
          Outside of school and work, I love...
        </Typography>

        {hobbies.map((hobby, index) => (
          <Hobby
            key={index}
            hobby={hobby}
          />
        ))}

      </Box>
    </Container>
  );
}