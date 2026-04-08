import React from "react";
import { Grid, Typography } from "@mui/material";
import { Article } from "@mui/icons-material";

import CustomButton from '../../components/CustomButton/CustomButton'

import './Home.css'

import db from '../../utils/db'

export default function Home(){

    return(
        <>
            <div className='home-mobile-profile container-shadow'>
                <div className='home-mobile-profile-header'>
                    <img className='home-mobile-profile-image' src={'/images/pfp.png'} alt='' />
                    <div>
                        <Typography className='home-mobile-profile-name'>
                            {db.name}
                        </Typography>
                        <Typography className='home-mobile-profile-title'>
                            {db.title}
                        </Typography>
                    </div>
                     <div className='home-mobile-btn-container'>
                        <CustomButton
                            icon={<Article />}
                            text="Resume"
                            href="/Jonathan_Coulter_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View Resume"
                        />
                    </div>
                </div>
            </div>

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
                        <Grid item xs={4} md={3}>
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