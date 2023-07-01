import React, { Component } from 'react';
import ExperienceCard from '../experience/ExperienceCard';

class ExperianceSection extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100" style={{ padding: '10px' }}>
                    <h2 className="mb-5">Experience</h2>

                    <ExperienceCard
                        title="Senior Software Engineer"
                        company="Onramper"
                        details="As a Senior Software Engineer - Fullstack, I played an instrumental role in the development and maintenance of Onramper, a global platform that streamlines fiat-to-crypto transactions. Utilizing a tech stack that included AWS Lambda, DynamoDB, NodeJS, React JS, and React Query, I contributed to a solution that enhances user experience in the crypto and web3 space. This platform supports a wide range of payment methods in 180 countries, significantly increases transaction success rates, reduces user fees, and provides access to over 1000 cryptocurrencies, over 130 fiat currencies and over 120 different payment methods"
                        timeFrom="November 2022"
                        timeTo="Present"
                    />

                    <ExperienceCard
                        title="Senior Software Engineer"
                        company="Sysco LABS Technologies"
                        details="Experienced Full Stack Engineer specializing in the development of Sysco Shop, the flagship e-commerce system for Sysco, a Fortune 500 company. Taking end-to-end ownership, I ensure seamless user experience, optimal performance, and unwavering reliability. Proficient in React JS, Node JS, Spring Boot, and GraphQL, I contribute to a microservice architecture deployed on Kubernetes. Skilled in handling high transaction volumes, I bring expertise in delivering robust solutions."
                        timeFrom="March 2021"
                        timeTo="November 2022"
                    />
                    <ExperienceCard
                        title="Software Engineer"
                        company="IFS R&D International :Technology "
                        details="Recruited immediately after completing a rigorous 3-year scholarship program, I embarked on a mission to enhance developer experience by leveraging the power of the marble modeling language. Utilizing technologies such as Java, ANTLR, Docker, LSP, Maven, ANT, and Bash, I am dedicated to creating a cutting-edge environment for developers to thrive."
                        timeFrom="Jan 2021"
                        timeTo="March 2021"
                    />
                    <ExperienceCard
                        title="Trainee Software Developer"
                        company="IFS R&D International :Technology "
                        details="During my 3-year tenure at IFS R&D International, I had the privilege of being employed as a Trainee Software Developer in the Technology team through the prestigious IFS scholarship program in collaboration with SLIIT. Within this role, I made significant contributions to the development of the 'Marble' programming language, encompassing modeling, code generation, middle-tier development, and server implementation."
                        details2="Leveraging technologies such as Java, Python, and the NetBeans Platform, I played a crucial part in providing robust framework support for IFS Applications. This experience not only expanded my expertise in software development but also fueled my passion for delivering innovative solutions. With the valuable skills gained through the scholarship program, I am excited to continue making impactful contributions in the software development field."
                        timeFrom="June 2018"
                        timeTo="Jan 2021"
                    />

                    <ExperienceCard
                        title="Microsoft Learn Student Ambassador - GOLD Level"
                        company="Microsoft"
                        details="Microsoft Student Partner program is re-branded to Microsoft Learn Student Ambassadors, I am really excited to have the privilege to be selected as a Microsoft Learn Student Ambassador which a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future, "
                        details2="I am honored and humble to be the first and currently the only Gold Level Student Ambassador in Sri Lanka."
                        timeFrom="August 2019"
                        timeTo="September 2021"
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
                        title="President"
                        company="MS Club of SLIIT"
                        details="I was the active president of the MS Club which tries to bridge the knowledge and technology gap
                        between a professional and an undergraduate"
                        
                        timeFrom="July 2019"
                        timeTo="November 2020"
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
                        timeTo="September 2021"
                    />
                </div>
            </section>
        );
    }
}

export default ExperianceSection;