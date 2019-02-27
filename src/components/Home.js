import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

import theme from '../assets/theme.png';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Paper square>
                    <img alt="CFCC Palo Alto 2019: Loving Family" className="home-theme" src={theme} />
                </Paper>
            </div>
        );
    }
}

export default Home;
