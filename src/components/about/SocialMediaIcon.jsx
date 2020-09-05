import React, { Component } from 'react';

class SocialMediaIcon extends Component {
    render() {
        return (
            <a href={this.props.url} target="_blank">
                <i className={this.props.icon}/>
            </a>
        );
    }
}

export default SocialMediaIcon;