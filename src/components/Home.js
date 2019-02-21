import React, { Component } from 'react';

import theme from '../assets/theme.png';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <img alt="CFCC Palo Alto 2019: Loving Family" className="home-theme" src={theme} />
            </div>
        );
    }
}

export default Home;
