import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About Me
                </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                </SidebarLink>
                    <SidebarLink to="Blogs" onClick={toggle}>
                        Blogs
                </SidebarLink>
                    <SidebarLink to="letscollaborate" onClick={toggle}>
                        Lets Collaborate
                </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    {/* router link so slash is must in the next line */}
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
