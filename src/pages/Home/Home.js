import React from "react";
import { Grid, Typography } from "@mui/material";

import './Home.css'

import db from '../../utils/db'

export default function Home(){

    return(
        <>
            {/* About me */}
            <Grid container className='section pb-45'>
                <Grid item className='section-title mb-30'>
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
            </Grid>

            {/* Hobbies */}
            <Grid container className='section pb-45'>
                <Grid item className='section-title mb-30'>
                    <span></span>
                    <h6 className="section-title-text">
                        Get to Know Me
                    </h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className="section-hobbies-text">
                        {db.hobbies}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}