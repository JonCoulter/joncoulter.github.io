import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

import './Home.css'

import db from '../../utils/db'

export default function Home(){

    return(
        <>
            {/* About me */}
            <Grid container className='section'>
                <Grid item className='section-title'>
                    <span></span>
                    <h6 className="section-title-text">
                        About Me
                    </h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className="section-about-me-text">
                        {db.about}
                    </Typography>
                </Grid>
                <Grid item className='section-title'>
                    <span></span>
                    <h6 className="section-title-text">
                        Experience
                    </h6>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent='space-around'>
                    {db.about_experiences.map((experience) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <div className='experience'>
                                <img className='experience-image' src={experience.image}/>
                                <Typography variant='body2' className='experience-title'>
                                    {experience.title}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Hobbies */}
            {/* <Grid container className='section pb-45'>
                <Grid item className='section-title mb-30'>
                    <span></span>
                    <h6 className="section-title-text">
                        Get to Know Me
                    </h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className="section-hobbies-text">
                        {db.gettoknowme}
                    </Typography>
                </Grid>

                <div className='hobbies'>
                    {db.hobbies.map((hobby) => (
                        <Paper elevation={4} className='hobby'>
                        <Typography variant='h5'>
                            {hobby.title}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8} lg={10}>
                            <Typography>
                                {hobby.description}
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={2}>
                            {hobby.images.map((image) => (
                                <img
                                className='hobby-image'
                                src={`images/${image}`}
                                alt='picture'
                                />
                            ))}
                            </Grid>
                        </Grid>
                        </Paper>
                    ))}
                </div>
            </Grid> */}
        </>
    )
}