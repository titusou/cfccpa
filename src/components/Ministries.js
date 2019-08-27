import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

import citizenshipClass from '../assets/citizenship-class.jpg';
import cookingClass from '../assets/cooking-class.png';
import englishClass from '../assets/english-class.jpg';

import './ministries.css';

class Ministries extends Component {
    render() {
        const flyers = [
            { name: 'English Class', src: englishClass },
            { name: 'Citizenship Class', src: citizenshipClass },
            { name: 'Cooking Class', src: cookingClass },
        ];

        return (
            <div className="ministry-flyers">
                {flyers.map((flyer, idx) => {
                    const { name, src } = flyer || {};

                    return (
                        <Paper className="ministry-img-container" key={idx} square>
                            <img alt={name} className="ministry-img" src={src} />
                        </Paper>
                    );
                })}
            </div>
        );
    }
}

export default Ministries;
