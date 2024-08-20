import React from "react";
import Button from '@mui/material/Button';

import './CustomButton.css'

export default function CustomButton({ icon, text }){
    return(
        <Button
            className='custom-btn'
            endIcon={icon ? (<div className='btn-icon-container'>{icon}</div>) : null}>
            <span className='btn-text'>
                {text}
            </span>
        </Button>
    )
}