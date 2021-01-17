import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <icon>
                <CloseIcon />
            </icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About Me
                </SidebarLink>
                    <SidebarLink to="projects">
                        Projects
                </SidebarLink>
                    <SidebarLink to="Blogs">
                        Blogs
                </SidebarLink>
                    <SidebarLink to="letscollaborate">
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
