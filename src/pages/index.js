import React, {useState} from 'react'
import {Navbar} from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import App from '../App';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../components/InfoSection/Data';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';
import VBGSection from '../components/VBGSection';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
       setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Showcase/>
            <VBGSection />

            <Footer/>
        </>
    );
}

export default Home;
