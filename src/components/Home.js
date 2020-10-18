import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

import Footer from './Footer';
import prayerMeeting from '../assets/prayer-meeting.png';
import readingGroups from '../assets/reading-groups.png';
import theme from '../assets/theme.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <Grid alignItems="center" className="home-grid" container justify="center" spacing={24}>
                        <Grid item xs={12}>
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
                        <div className="home-prayer-meeting-title">
                            JOIN US FOR PRAYER MEETINGS & BIBLE READING GROUPS ON ZOOM
                        </div>
                        <Grid item xs={12} sm={6}>
                            <div className="home-section">
                                <Paper square>
                                    <img alt="Prayer Meeting" className="home-theme-img" src={prayerMeeting} />
                                </Paper>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="home-section">
                                <Paper square>
                                    <img
                                        alt="Bible Reading Groups"
                                        className="home-theme-img"
                                        src={readingGroups}
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
