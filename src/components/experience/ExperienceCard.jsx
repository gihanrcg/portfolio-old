import React, { Component } from 'react';



class ExperienceCard extends Component {

    componentDidMount() {
        // AOS.init({
        //     duration: 500
        // })
    }

    render() {
        return (
            <div data-aos="fade-up" data-aos-duration="500"
                className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 small-box" style={{ padding: '20px' }}>
                <div className="resume-content">
                    <p className="mb-5" style={{ fontSize: '24px',color:'#45a29e' }}><strong>{this.props.title}</strong></p>
                    <div className="subheading mb-3">{this.props.company}</div>

                    {this.props.details &&
                        <p>{this.props.details}</p>
                    }
                    {this.props.details2 &&
                        <p>{this.props.details2}</p>
                    }
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">{this.props.timeFrom} - {this.props.timeTo}</span>
                </div>
            </div>
        );
    }
}

export default ExperienceCard;