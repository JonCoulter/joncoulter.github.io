import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { HomeOutlined, Telegram } from "@mui/icons-material"
import CustomButton from '../CustomButton/CustomButton'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import db from '../../utils/db'


export default function Header(props) {
    const location = useLocation().pathname

    return(
        <Navbar expand='lg' sticky='top' className='header'>
            {/* Home Link */}
            <Nav.Link as={NavLink} to='/'>
                <Navbar.Brand className='header-home'>
                    <HomeOutlined />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header-left'>
                    {/* Home Link */}
                    <Nav.Link 
                        as={NavLink}
                        to='/'
                        className={location === '/' ? 'header-link-active' : 'header-link'}>
                            Home
                    </Nav.Link>

                    {/* Resume Link */}
                    <Nav.Link 
                        as={NavLink}
                        to='/resume'
                        className={location === '/resume' ? 'header-link-active' : 'header-link'}>
                            Resume
                    </Nav.Link>

                    {/* Teaching Link */}
                    <Nav.Link 
                        as={NavLink}
                        to='/teaching'
                        className={location === '/teaching' ? 'header-link-active' : 'header-link'}>
                            Teaching
                    </Nav.Link>
                </Nav>

                <div className='header-right'>
                    {Object.keys(db.socials).map(key => (
                        <a key={key} href={db.socials[key].link} target='_blank'>
                            {db.socials[key].icon}
                        </a>
                    ))}
                    <CustomButton
                        icon={<Telegram />}
                        text="Contact Me"
                        href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=${db.email}}`}
                        target="_blank"
                        rel="nofollow noopener"
                        title="Send Email"
                    />

                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}