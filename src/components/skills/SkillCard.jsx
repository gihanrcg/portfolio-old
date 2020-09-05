import React, { Component } from 'react';

class SkillCard extends Component {
    render() {
        return (
            <div 
            data-aos="fade-down" data-aos-duration="500"
            className="small-box dev-icons text-center">

                <i className={`${this.props.icon} text-center`} />
                <p>{this.props.name}</p>

            </div>
        );
    }
}

export default SkillCard;