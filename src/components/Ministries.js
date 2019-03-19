import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

import citizenshipClass from '../assets/citizenship-class.jpg';
import englishClass from '../assets/english-class.jpg';

class Ministries extends Component {
    render() {
        return (
            <div className="ministry-flyers">
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Paper className="ministry-img-container" square>
                            <img alt="Citizenship Class" className="ministry-img" src={citizenshipClass} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className="ministry-img-container" square>
                            <img alt="English Class" className="ministry-img" src={englishClass} />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Ministries;
