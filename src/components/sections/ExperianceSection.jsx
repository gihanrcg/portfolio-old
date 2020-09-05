import React, { Component } from 'react';
import ExperienceCard from '../experience/ExperienceCard';

class ExperianceSection extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100" style={{ padding: '10px' }}>
                    <h2 className="mb-5">Experience</h2>
                    <ExperienceCard
                        title="Microsoft Learn Student Ambassador"
                        company="Microsoft"
                        details="Microsoft Student Partner program is rebranded to Microsoft Learn Student Ambassadors, I am really excited to have the privilege to be selected as a Microsoft Learn Student Ambassador which a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future, "
                        timeFrom="August 2019"
                        timeTo="Present"
                    />
                    <ExperienceCard
                        title="Microsoft Student Partner"
                        company="Microsoft"
                        details="I was selected as one out of seven Microsoft Student Partners since the year 2019.
                        I have been conducting Techtalks, workshops, and hackathons all around Sri Lanka as an MSP to improve the tech community in Sri Lanka."
                        timeFrom="August 2019"
                        timeTo="August 2020"
                    />
                    <ExperienceCard
                        title="Trainee Software Developer"
                        company="IFS R&D International :Technology "
                        details="Employed by IFS R & D International for 3 years as a Trainee Software Developer in the Technology team
                        under the scholarship program offered by IFS in collaboration with SLIIT"
                        details2="Developing the 'Marble' programming language with a tool to handle modeling, code generation, middle tier
                        development and server implementation utilizing technologies like Java, Python and Netbeans Platform to
                        provide the internal framework support to IFS Applications"
                        timeFrom="June 2018"
                        timeTo="Present"
                    />
                    <ExperienceCard
                        title="President"
                        company="MS Club of SLIIT"
                        details="I am the active president of the MS Club which tries to bridge the knowledge and technology gap
                        between a professional and an undergraduate by hosting a number of events and workshop "
                        timeFrom="July 2019"
                        timeTo="Present"
                    />
                    <ExperienceCard
                        title="Committee Member"
                        company="Faculty of Computing Students Community - SLIIT"
                        details="I was a committee member in the main student body of the faculty of computing. I directly involved with 
                        all the events organized by faculty of computing throughout the year"
                        timeFrom="Feb 2018"
                        timeTo="March 2019"
                    />
                    <ExperienceCard
                        title="Web Master"
                        company="IET on campus - SLIIT"

                        timeFrom="July 2018"
                        timeTo="July 2019"
                    />
                    <ExperienceCard
                        title="Member"
                        company="FOSS Community - SLIIT"
                        timeFrom="July 2017"
                        timeTo="Present"
                    />
                </div>
            </section>
        );
    }
}

export default ExperianceSection;