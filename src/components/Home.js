import React, { Component } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

import Footer from './Footer';
import sundaySchoolApril from '../assets/sunday-school-april.png';
import theme from '../assets/theme.png';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <Grid alignItems="center" className="home-grid" container justify="center" spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <div className="home-section">
                                <Paper className="home-theme-container" square>
                                    <img
                                        alt="CFCC Palo Alto 2019: Loving Family"
                                        className="home-theme-img"
                                        src={theme}
                                    />
                                </Paper>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="home-section">
                                <div className="home-sermon-header">
                                    Watch the latest sermon by{' '}
                                    <span className="home-sermon-header-speaker">Steve Cheng</span>
                                </div>
                                <div className="home-sermon-block">
                                    <div>全心全意</div>
                                    <div>愛你的家</div>
                                </div>
                                <div className="home-sermon-actions">
                                    <Button href="/sermons" size="large" variant="outlined">
                                        <PlayArrow />
                                        WATCH
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <div className="home-sunday-school-title">
                            <span className="home-sunday-school-title-month">April</span> Sunday School
                        </div>
                        <Grid item sm={6}>
                            <div className="home-section">
                                <Paper square>
                                    <img
                                        alt="Sunday School in April with Dr. Patrick Hunt"
                                        className="home-sunday-school-img"
                                        src={sundaySchoolApril}
                                    />
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
