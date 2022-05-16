import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "about" onClick = {toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to = "projects" onClick = {toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to = "work" onClick = {toggle}>
                        Work
                    </SidebarLink>
                    <SidebarLink to = "contact" onClick = {toggle}>
                        Contact Me
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
