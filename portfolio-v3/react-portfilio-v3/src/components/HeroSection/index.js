import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

                <HeroContent>
                    <heroH1>
                        Shahaab Manzar
                </heroH1>
                    <HeroP>

                    </HeroP>
                </HeroContent>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection;
