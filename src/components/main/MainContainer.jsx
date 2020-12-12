import React, { Component } from 'react';
import AboutSection from '../sections/AboutSection'
import ExperienceSection from '../sections/ExperianceSection'
import EducationSection from '../sections/EducationSection';
import SkillsSection from '../sections/SkillsSection';
import GallerySection from '../sections/GallerySection';
import PersonalProjectSection from '../sections/PersonalProjectSection';
import ContactUsSection from '../sections/ContactUsSection';

class MainContainer extends Component {
    render() {
        return (
            <div style={{width:'100%',overflow:'none'}} className="container-fluid p-0">
                <AboutSection />
                <ExperienceSection/>
                <EducationSection/>
                <SkillsSection/>
                <PersonalProjectSection/>
                <GallerySection/>   
                {/* <ContactUsSection/> */}
            </div>
        );
    }
}

export default MainContainer;