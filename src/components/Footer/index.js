import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIconLink } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer id= "contact">
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = '/Website' onClick = {toggleHome}>
                            Harshal Bhalerao
                        </SocialLogo>
                        <WebsiteRights>Harshal Bhalerao {'\u00A9'} {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href = "https://github.com/HarshalBhalerao" target = "_blank" aria-label = "Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href = "https://www.linkedin.com/in/harshal-bhalerao-a6072a1b0/" target = "_blank" aria-label = "Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href = "mailto:bhaleraoharshal99@outlook.com" target = "_blank" aria-label = "Linkedin">
                                <FaMailBulk />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};
export default Footer;
