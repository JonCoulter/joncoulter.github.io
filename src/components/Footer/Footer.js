import React from "react";

import './Footer.css'
import { Typography } from "@mui/material";

import db from '../../utils/db'

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footer-left'>
                <Typography className='footer-name'>{db.name}.</Typography>
            </div>
            <div className='footer-right'>
                <Typography class='footer-copyright'>
                    Check out this website's {' '}<a href='https://github.com/JonCoulter/personal-website' target='_blank'>repository</a>
                </Typography>
            </div>
        </div>
    )
}