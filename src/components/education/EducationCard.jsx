import React, { Component } from 'react';
import AOS from 'aos'

class EducationCard extends Component {

    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render() {
        return (
            <div data-aos="fade-up" data-aos-duration="500"
                className="small-box resume-item d-flex flex-column flex-md-row justify-content-between mb-5" style={{ padding: '20px' }}>
                <div className="resume-content">
                    <p className="mb-5" style={{ fontSize: '24px', color: '#45a29e' }}><strong>{this.props.title}</strong></p>
                    <div className="subheading mb-3">{this.props.uni}</div>

                    {this.props.gpa &&
                        <p>{this.props.gpa}</p>
                    }
                    <div className="resume-date text-md-left">
                        <span className="text-primary">{this.props.due}</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default EducationCard;