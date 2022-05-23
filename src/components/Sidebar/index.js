import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu, SideBtnWrap } from './SidebarElements';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    borderRadius: 30,
    backgroundColor: grey[400],
    '&:hover': {
        backgroundColor: grey[700],
        justifyContent: 'center'
    },
}));

const openSite = () => {
    window.open("https://harshalbhalerao.github.io/", "_blank") //to open new page
}

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="workExp" onClick={toggle}>
                        Work Experience
                    </SidebarLink>
                    <SideBtnWrap>
                        <ColorButton onClick={openSite} variant="contained">Resume</ColorButton>
                    </SideBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
