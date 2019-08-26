import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

import sundaySchool from '../assets/sunday-school.png';
import sundaySchoolChildren from '../assets/sunday-school-children.png';

import './sundayschool.css';

class SundaySchool extends Component {
    render() {
        const flyers = [
            { name: 'Sunday School', src: sundaySchool },
            { name: `Sunday School for Children`, src: sundaySchoolChildren },
        ];

        return (
            <div>
                <div className="page-title-block page-title-block-bg-default">
                    <div className="page-title">Sunday School</div>
                </div>
                <div className="sunday-school-flyers">
                    {flyers.map((flyer, idx) => {
                        const { name, src } = flyer || {};

                        return (
                            <Paper className="sunday-school-img-container" key={idx} square>
                                <img alt={name} className="sunday-school-img" src={src} />
                            </Paper>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default SundaySchool;
