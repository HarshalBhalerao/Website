// import React, {useState} from 'react'
import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ImageMe, SocialIconLink, SocialIcons } from './HeroElements';
import '../../index.css';
import Image from '../../images/me.jpg';
import HeroImage from '../../images/heroImage.jpg'
import TypeAnimation from 'react-type-animation';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg src={HeroImage} />
            </HeroBg>
            <HeroContent>
                <ImageMe src={Image} />
                <HeroH1>{' '}<TypeAnimation
                    cursor={true}
                    sequence={['Hello! ', 1000, "Hello! I'm Harshal.", 500]}
                    repeat={1}
                /></HeroH1>
                <hr className = "info-divider" />
                <HeroP>{' '}<TypeAnimation cursor={true} repeat={Infinity} sequence={["DevOps Engineer", 1000, "Software Developer", 1000, "Full-Stack Developer", 1000, "CS @ UManitoba", 1000]} /></HeroP>
                <hr className = "info-divider" />

                <SocialIcons>
                    <SocialIconLink href="https://github.com/HarshalBhalerao" target="_blank" aria-label="Github">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/harshal-bhalerao-a6072a1b0/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="mailto:bhaleraoharshal99@outlook.com" target="_blank" aria-label="Linkedin">
                        <FaMailBulk />
                    </SocialIconLink>
                </SocialIcons>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
