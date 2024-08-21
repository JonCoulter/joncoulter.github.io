import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { HomeOutlined, Telegram } from "@mui/icons-material"
import CustomButton from '../CustomButton/CustomButton'

import db from '../../utils/db'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

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
                    {/* Resume Link */}
                    <Nav.Link 
                        as={NavLink}
                        to='/'
                        className={location === '/' ? 'header-link-active' : 'header-link'}>
                            Resume
                    </Nav.Link>

                    {/* Portfolio Link */}
                    <Nav.Link 
                        as={NavLink}
                        to='/portfolio'
                        className={location === '/portfolio' ? 'header-link-active' : 'header-link'}>
                            Portfolio
                    </Nav.Link>
                </Nav>

                <div className='header-right'>
                    {Object.keys(db.socials).map(key => (
                        <a key={key} href={db.socials[key].link} target='_blank'>
                            {db.socials[key].icon}
                        </a>
                    ))}
                    <CustomButton text='Contact Me' icon={<Telegram />} email={db.email}/>
                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}