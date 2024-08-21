import React from "react";
import Button from '@mui/material/Button';

import './CustomButton.css';

export default function CustomButton({ icon, text, email }) {
    const href = email ? `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=${email}` : undefined;

    return (
        <Button
            className='custom-btn'
            endIcon={icon ? (<div className='btn-icon-container'>{icon}</div>) : null}
            component='a'
            href={href}
            target='_blank'
            rel='nofollow noopener'
        >
            <span className='btn-text'>
                {text}
            </span>
        </Button>
    );
}