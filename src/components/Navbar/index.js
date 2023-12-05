import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[500]),
        borderRadius: 50,
        backgroundColor: grey[400],
        '&:hover': {
            backgroundColor: grey[700],
        },
    }));

    const openSite = () => {
        window.open("https://harshalbhalerao.github.io/", "_blank") //to open new page
     }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/Website' onClick={toggleHome}>
                            Harshal Bhalerao
                        </NavLogo>
                        <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="workExp" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Work Experience</NavLinks>
                            </NavItem>
                            <ColorButton onClick={openSite} variant="contained">Resume</ColorButton>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
