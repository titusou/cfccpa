import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

import Footer from './Footer';
import prayerMeeting from '../assets/prayer-meeting.png';
import readingGroups from '../assets/reading-groups.png';
import theme from '../assets/theme.jpg';
import cefSpring2020 from '../assets/cef-spring-2020.jpg';

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
                                        alt="CEF Spring Conference 2020"
                                        className="home-theme-img"
                                        src={cefSpring2020}
                                    />
                                </Paper>
                            </div>
                            <div className="home-cef-desc">
                                Campus Evangelistic Fellowship (CEF) will hold a conference from September 4-6th with its theme: "Where to Find PEACE?". The keynote speaker is Professor Charles Lee. For registration information, please look at <a href="https://www.cef2020.info/" target="_blank" rel="noreferrer noopener">https://www.cef2020.info/</a>.
                            </div>
                            <div className="home-cef-desc">
                                校園福音團契第二十七屆秋令營於9月4-6號舉行。主題：平安何處尋？及幾個專題包括由世界歷史看基督教信仰。主講員：李勉群教授。今年在線上Zoom舉行，免費，歡迎大家報名。報名信息請查看<a href="https://www.cef2020.info/" target="_blank" rel="noreferrer noopener">https://www.cef2020.info/</a>.
                            </div>
                        </Grid>
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
