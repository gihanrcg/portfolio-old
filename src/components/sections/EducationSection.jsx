import React, { Component } from 'react';
import EducationCard from '../education/EducationCard'

class EducationSection extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="w-100">
                    <h2 className="mb-5">Education</h2>
                    <EducationCard
                        title="B.Sc. Special (Hons) – Information Technology (Specialization – Software Engineering)"
                        uni="Sri Lanka Institute of Information Technology"
                        gpa="GPA: 3.60"
                        due="Nov 2017 - Dec 2021"
                    />
                    <EducationCard
                        title="Diploma in Information Technology"
                        uni="Esoft Metro Campus - Galle"
                        due="August 2016 - Feb 2017"
                    />
                    <EducationCard
                        title="Certification in Presentation Skills"
                        uni="British Council"
                        due="Nov 2019"
                    />
                    <EducationCard
                        title="Certificate in Graphic Designing and Animation Course"
                        uni="Ministry of Education - Sri Lanka"
                        due="Nov 2010"
                    />
                    <EducationCard
                        title="Advanced Course on Microsoft Office"
                        uni="Scooner Computer Academy"
                        due="Jan 2006"
                    />

                </div>
            </section>
        );
    }
}

export default EducationSection;