import React from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg }

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4' />

            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection;
