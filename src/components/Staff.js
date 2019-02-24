import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Email, Call } from '@material-ui/icons';

import johnZhou from '../assets/john-zhou.jpg';
import steveCheng from '../assets/steve-cheng.jpg';

class Staff extends Component {
    renderCard(name, image, email, phone) {
        return (
            <Card className="staff-card">
                {image ? <CardMedia className="staff-card-img" component="img" image={image} /> : null}
                <CardContent>
                    <div className="staff-card-name">{name}</div>
                </CardContent>
                <CardActions className="staff-card-actions" disableActionSpacing>
                    {email ? (
                        <Button color="primary" href={`mailto:${email}`}>
                            <Email />
                        </Button>
                    ) : null}
                    {phone ? (
                        <Button color="primary" href={`tel:+${phone}`}>
                            <Call />
                        </Button>
                    ) : null}
                </CardActions>
            </Card>
        );
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="staff-title">The Community Staff</div>
                </Jumbotron>
                <div className="staff-cards">
                    {this.renderCard('Pastor Steve Cheng', steveCheng, 'yichunsteve@cfccpaloalto.org', '4087817028')}
                    {this.renderCard('Minister John Zhou', johnZhou)}
                </div>
            </div>
        );
    }
}

export default Staff;
