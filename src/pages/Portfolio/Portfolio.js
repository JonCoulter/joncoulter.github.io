import React, { useState } from "react";
import { Grid, Tab, Tabs } from "@mui/material";

import './Portfolio.css'

export default function Portfolio() {
    const [tabValue, setTabValue] = useState('All')

    return(
        <Grid container classname='section pb-45'>
            {/* Title */}
            <Grid item className='section-title mb-30'>
                <span></span>
                <h6 className="section-title-text">
                    Portfolio
                </h6>
            </Grid>

            {/* Tabs */}
            <Grid item>
                hi
            </Grid>
        </Grid>
    )
}