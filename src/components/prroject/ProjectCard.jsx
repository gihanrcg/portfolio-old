import React, { Component } from 'react';
import './styles.css';

class ProjectCard extends Component {
    render() {
        return (
            <div className="small-box" style={{ padding: '20px' }}>
                <div data-aos="fade-up" data-aos-duration="500" className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title" style={{ fontSize: '24px' }}>{this.props.title}</h4>
                            <p className="card-text"> {this.props.details}</p>
                            <p className="card-text"><small> Technologies Used : <b>{this.props.tech}</b></small></p>
                            {
                                this.props.link &&
                                <p className="card-text"><a target="_blank"  rel="noopener noreferrer" href={this.props.link}> URL : <b>{this.props.link}</b></a></p>
                            }
                            {
                                this.props.online &&
                                <div style={{ width: '100%' }} className="body-div">
                                    <p className=""><small><i className="neon-online fas fa-circle" /> &nbsp;&nbsp;In Development</small> </p>
                                </div>
                            }
                            {
                                this.props.awards &&
                                <div>
                                    {
                                        this.props.awards.map(award => {
                                            return (<div style={{ width: '100%' }} className="body-div">
                                                <p style={{color:'#FFD700'}}><i class="fas fa-award"/> {award} </p>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;