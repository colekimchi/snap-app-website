import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer,
    HeroBg, 
    VideoBg,
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';
// import { FaArrowRight } from 'react-icons/fa';


export const HeroSection = () => {
const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} 
                    type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Bottom Text</HeroH1>
                <HeroP>
                    Check out the size of this W bossman
                </HeroP>
            <HeroBtnWrapper>
                <Button to="about" 
                    onMouseEnter ={onHover} 
                    onMouseLeave ={onHover}
                    primary = 'false'
                    dark='false'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    Continue{hover ? <ArrowForward/>:<ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};
