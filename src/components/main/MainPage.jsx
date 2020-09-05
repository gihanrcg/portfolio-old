import React, { Component } from 'react';
import Navigator from '../Navigator';
import MainContainer from './MainContainer'

class MainPage extends Component {
    render() {
        return (
            <div>
                <Navigator/>
                <MainContainer/>
            </div>
        );
    }
}

export default MainPage;