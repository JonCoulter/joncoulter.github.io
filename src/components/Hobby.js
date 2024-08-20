import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

export default function Hobby({ hobby }) {
  return (
    <Paper
      square={false}
      elevation={4}
      sx={{
        padding: 2,
        marginLeft: 2,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        sx={{
          marginLeft: 1,
          marginTop: 1
        }}
      >
        {hobby.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={3} md={2} lg={2}>
          <Box display="flex" flexDirection="column">
            {hobby.images.map((image, index) => (
              <img 
                key={index}
                src={`/images/${image}`} 
                alt="Hobby"
                style={{ width: '100px', height: '100px', marginBottom: 8 }}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={9} sm={9} md={10} lg={10}>
          <Typography>
            {hobby.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}