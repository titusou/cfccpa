import React, { Component } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

import Footer from './Footer';
import prayerMeeting from '../assets/prayer-meeting.png';
import theme from '../assets/theme.jpg';

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
                        <Grid item xs={12} md={6}>
                            <div className="home-section">
                                <div className="home-sermon-header">
                                    Watch the latest sermon by{' '}
                                    <span className="home-sermon-header-speaker">Professor Lee</span>
                                </div>
                                <div className="home-sermon-block">
                                    <div>因我受造奇妙可畏</div>
                                </div>
                                <div className="home-sermon-actions">
                                    <Button href="/sermons" size="large" variant="outlined">
                                        <PlayArrow />
                                        WATCH
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <div className="home-prayer-meeting-title">
                            JOIN US FOR PRAYER MEETINGS ON ZOOM
                        </div>
                        <Grid item sm={6}>
                            <div className="home-section">
                                <Paper square>
                                    <img alt="Prayer Meeting" className="home-theme-img" src={prayerMeeting} />
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
