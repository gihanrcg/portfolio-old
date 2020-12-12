import React, { Component } from 'react';
import gihan from  '../images/gihan.jpg';

class Navigator extends Component {
    render() {
        return (    
            <div>
                <nav  className=" fixed-top navbar navbar-expand-lg navbar-dark bg-primary" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#about">
                        <span className="d-block d-lg-none">Gihan Siriwardhana</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={gihan} alt="" />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#projects">Personal Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#gallery">Gallery</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" target="_blank" href="https://gihanblog.netlify.com/">Blog</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigator;