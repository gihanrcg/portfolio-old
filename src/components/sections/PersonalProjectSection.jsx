import React, { Component } from 'react';
import ProjectCard from '../prroject/ProjectCard';

import schoolMgmt from '../../images/proj/schoolmanagementsystem.JPG'
import hotel from '../../images/proj/hotel.png'
import inventory from '../../images/proj/inventory.JPG'
import covid from '../../images/proj/covid.JPG'
import thuru from '../../images/proj/thuru.PNG'
import blog from '../../images/proj/blog.JPG'
import k8 from '../../images/proj/k8.jpg'

class PersonalProjectSection extends Component {
    render() {
        return (
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
                    <div className="w-100">
                        <h2 className="mb-5">Personal Projects</h2>
                        <div >

                            <ProjectCard
                                image={k8}
                                title="A Network Science-Based Approach for an Optimal Microservice Governance  "
                                details="A unified governance model for optimizing microservice deployments factoring in dependency analysis, load prediction, centrality analysis as well as and resilience evaluation.                                
                                
                                (Published in The International Conference on Advancements in Computing)
                                "
                                tech="Microservice | Kubernetes | Docker | Istio | Shell | YAML | Python | NodeJS | ReactJS"
                            />
                            <ProjectCard
                                image={thuru}
                                title="Fully customizable online store"
                                details="An online store that can be customized just by chaning two files. The application can be used as both web application as well as desktop application."
                                tech="React JS | Bootstrap | Bulma | AnimateJS | ElectronJS"
                            />
                            <ProjectCard
                                image={hotel}
                                title="Hotel Management System"
                                details="A standalone system as well as online web application where customers can manage almost all the task regarding hotel management such as Employee attendance, salary, bill calculation, room booking etc."
                                tech="C# | MySQL | .NET | JSP"
                            />
                            <ProjectCard
                                image={schoolMgmt}
                                title="School Management System"
                                details="Student Instructor information System developed making the using of REST API
                                technologies with the help of ExpressJS to develop the backend services and ReactJS for the front-end
                                components. The developed project provides the features and functionalities to the users
                                which mainly consist of Student, Instructor and Administrator user roles.
                                
                                Includes client side and server side authentications utilizing JWT tokens and well
                                thought about the security with encrypted data.
                                "
                                tech="ReactJS | Node JS | SpringBoot | HTML5 | CSS3 | Bootstrap | Express JS | MongoDB"
                                link="https://sms-af.herokuapp.com"
                            />
                            <ProjectCard
                                image={inventory}
                                title="Inventory Management System"
                                details="An inventory management system which can perform day to day tasks regarding the
                                storage of any kind of shop with much more efficiently and precisely ."
                                tech="Java FX | SQL Server | Bootstrap | Express JS | MongoDB"
                            />
                            <ProjectCard
                                image={covid}
                                title="COVID-19 Status Tracker"
                                details="A dashboard which consumes several public APIs to visualize the status of COVID-19 situation. The system also includes interactive map, country comparison with timeseries data curves and realtime news"
                                tech="React JS | Chart JS | Bootstrap | Postman"
                                link="https://covid-19-gihan.netlify.com/"
                            />
                            <ProjectCard
                                image={blog}
                                title="Blog Web Application"
                                details="Developed a blog site for myself to share my knowledge among others"
                                tech="React JS | Node JS | Express JS | Bootstrap | MarkDown | Azure Functions | Google Analytics"
                                link="https://gihanblog.netlify.com/"
                            />
                            <ProjectCard
                                image={'https://venturebeat.com/wp-content/uploads/2020/05/microsoft-teams-logo.png?fit=1500%2C750&strip=all'}
                                title="Add users to teams using a csv"
                                details="Script to add a bulk list of users to a team in MS teams with the help of MS teams module for PowerShell"
                                tech="PowerShell | Batch Script"
                                link="https://github.com/gihanrcg/MSTeamsBulkUser"

                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PersonalProjectSection;