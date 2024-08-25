import React from "react";
import Button from '@mui/material/Button';

import './CustomButton.css';

export default function CustomButton({ icon, text, href, target, rel, title }) {
    return (
        <Button
            className='custom-btn'
            endIcon={icon ? (<div className='btn-icon-container'>{icon}</div>) : null}
            component="a"
            href={href}
            target={target}
            rel={rel}
            title={title}
        >
            <span className='btn-text'>
                {text}
            </span>
        </Button>
    );
}