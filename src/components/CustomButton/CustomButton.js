import React from "react";
import Button from '@mui/material/Button';

import './CustomButton.css';

export default function CustomButton({ icon, text, href, target, rel, title }) {
    return (
        <Button
            className='custom-btn'
            endIcon={icon ? (<div className='btn-icon-container'>{icon}</div>) : null}
            component="a"  // Render as an anchor tag
            href={href}  // URL for email, download link, etc.
            target={target}  // _blank, _self, etc.
            rel={rel}  // nofollow, noopener, noreferrer, etc.
            title={title}  // Tooltip text
        >
            <span className='btn-text'>
                {text}
            </span>
        </Button>
    );
}