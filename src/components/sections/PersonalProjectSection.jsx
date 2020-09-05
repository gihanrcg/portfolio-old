import React, { Component } from 'react';
import ProjectCard from '../prroject/ProjectCard';

import schoolMgmt from '../../images/proj/schoolmanagementsystem.JPG'
import hotel from '../../images/proj/hotel.png'
import inventory from '../../images/proj/inventory.JPG'
import covid from '../../images/proj/covid.JPG'
import karate from '../../images/proj/karate.JPG'
import blog from '../../images/proj/blog.JPG'

class PersonalProjectSection extends Component {
    render() {
        return (
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
                    <div className="w-100">
                        <h2 className="mb-5">Personal Projects</h2>
                        <div >
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
                                online={true}
                            />
                            <ProjectCard
                                image={karate}
                                title="Ashihara Karate Association"
                                details="Web Application for Ashihara Karate Association to display their achievements and informations for the students"
                                tech="React JS | Node JS | Express JS | Bootstrap | Postman"
                                link="https://ashiharakarate.netlify.app/"
                                online={true}
                            />
                            <ProjectCard
                                image={blog}
                                title="Blog Web Application"
                                details="Developed a blog site for myself to share my knowledge among others"
                                tech="React JS | Node JS | Express JS | Bootstrap | MarkDown | Azure Functions | Google Analytics"
                                link="https://gihanblog.netlify.com/"
                                online={true}
                            />
                            <ProjectCard
                                image={'https://venturebeat.com/wp-content/uploads/2020/05/microsoft-teams-logo.png?fit=1500%2C750&strip=all'}
                                title="Add users to teams using a csv"
                                details="Script to add a bulk list of users to a team in MS teams with the help of MS teams module for PowerShell"
                                tech="PowerShell | Batch Script"
                                link="https://github.com/gihanrcg/MSTeamsBulkUser"
                                online={true}
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PersonalProjectSection;