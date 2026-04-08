import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HomeOutlined, Telegram } from "@mui/icons-material"
import CustomButton from '../CustomButton/CustomButton'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import db from '../../utils/db'


export default function Header(props) {
    const { currentTab, onChangeTab } = props
    const [isScrolled, setIsScrolled] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleTabClick = (e, tab) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault()
        if (onChangeTab) onChangeTab(tab)
        setIsExpanded(false)
    }

    return(
        <Navbar
            expand='lg'
            expanded={isExpanded}
            onToggle={(nextExpanded) => setIsExpanded(nextExpanded)}
            className={`header ${isScrolled ? 'header-scrolled' : ''}`}
        >
            {/* Home Link */}
            <Nav.Link as="span" onClick={(e) => handleTabClick(e, 'home')} role='button'>
                <Navbar.Brand className={`header-home ${isExpanded ? 'header-home-expanded' : ''}`}>
                    <HomeOutlined />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle aria-controls='header-navbar-nav' />

            <Navbar.Collapse id='header-navbar-nav'>
                <Nav className='header-left'>
                    {/* Home Link */}
                    <Nav.Link 
                        as="span"
                        onClick={(e) => handleTabClick(e, 'home')}
                        className={currentTab === 'home' ? 'header-link header-link-active' : 'header-link'}>
                            Home
                    </Nav.Link>

                    {/* Resume Link */}
                    <Nav.Link 
                        as="span"
                        onClick={(e) => handleTabClick(e, 'resume')}
                        className={currentTab === 'resume' ? 'header-link header-link-active' : 'header-link'}>
                            Resume
                    </Nav.Link>

                    {/* Teaching Link */}
                    <Nav.Link 
                        as="span"
                        onClick={(e) => handleTabClick(e, 'teaching')}
                        className={currentTab === 'teaching' ? 'header-link header-link-active' : 'header-link'}>
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
                        href={`${db.socials["Email"].link}`}
                        target="_blank"
                        rel="nofollow noopener"
                        title="Send Email"
                    />

                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}