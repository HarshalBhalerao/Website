import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { about, work, workUofM } from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { WorkH1 } from '../components/InfoSection/InfoElements';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...about} />
            <Projects />
            <WorkH1 id="workExp">Work Experience</WorkH1>
            <InfoSection {...work} />
            <hr />
            <InfoSection {...workUofM} />
            <Footer />
        </>
    )
}

export default Home
