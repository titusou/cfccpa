import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

import sundaySchoolApril from '../assets/sunday-school-april.png';

class SundaySchool extends Component {
    render() {
        return (
            <div>
                <div className="sunday-school-title-block">
                    <div className="sunday-school-title">Sunday School</div>
                </div>
                <div className="sunday-school-flyer">
                    <div className="home-section">
                        <Paper className="home-theme-container" square>
                            <img
                                alt="Sunday School in April with Dr. Patrick Hunt"
                                className="home-sunday-school-img"
                                src={sundaySchoolApril}
                            />
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}

export default SundaySchool;
