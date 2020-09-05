import React, { Component } from 'react';
import { languages,tools, other } from '../skills/skillSet'


import SkillCard from '../skills/SkillCard'
import '../../styles/skillSectionStyles.css'

class SkillsSection extends Component {
    render() {




        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3" >Programming Languages and Frameworks</div>


                    <div className="cards-skill">
                        {
                            languages.map((lan,key) => {
                                return (
                                    <div key={key} className="card-skill">
                                        <SkillCard icon={lan.icon} name={lan.name} />
                                    </div>

                                )
                            })
                        }
                    </div>

                    <br/><br/><br/>

                    <div className="subheading mb-3" >Tools and Technologies</div>

                    <div className="cards-skill">
                        {
                            tools.map((lan, key) => {
                                return (
                                    <div key={key} className="card-skill">
                                        <SkillCard icon={lan.icon} name={lan.name} />
                                    </div>

                                )
                            })
                        }
                    </div>

                    <br/><br/><br/>

                    <div className="subheading mb-3">Other</div>

                    <div className="cards-skill">
                        {
                            other.map((lan,key) => {
                                return (
                                    <div key={key} className="card-skill">
                                        <SkillCard icon={lan.icon} name={lan.name} />
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>


            </section>
        );
    }
}

export default SkillsSection;