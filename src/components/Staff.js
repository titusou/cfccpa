import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Email, Call } from '@material-ui/icons';

import steveCheng from '../assets/steve-cheng.jpg';
import johhZhou from '../assets/john-zhou.jpg';

import './staff.css';

class Staff extends Component {
    renderCard(name, image, email, phone, description) {
        return (
            <Card className="cfccpa-card staff-card">
                <div>
                    {image ? <CardMedia className="cfccpa-card-img" component="img" image={image} /> : null}
                    <CardContent>
                        <div className="cfccpa-card-name">{name}</div>
                        <div className="cfccpa-card-description">{description}</div>
                    </CardContent>
                </div>
                <div>
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
                </div>
            </Card>
        );
    }

    render() {
        return (
            <div>
                <div className="staff-title-block">
                    <div className="staff-title">The Community Staff</div>
                </div>
                <div className="cfccpa-cards">
                    {this.renderCard(
                        'Elder Steve Cheng',
                        steveCheng,
                        'yichunsteve@cfccpaloalto.org',
                        '4087817028',
                        `Steve came to Christ during his studies in the United States. Upon graduation, Steve started a computer parts company in Silicon Valley. After running it for more than ten years, Steve made the decision to enter into full-time ministry. In 2015, Steve graduated from Overseas Theological Seminary. Steve and his wife, On Lee, are blessed with a son and two daughters.`
                    )}
                    {this.renderCard(
                        'Minister John Zhou',
                        johhZhou,
                        'zhouhouen@gmail.com',
                        null,
                        'Houen began interning during the early days of CFCCPA, while studying at Overseas Theological Seminary. Upon graduating in 2017, Houen made a decision to commit himself to full-time ministry in the same community he has grown to love when he first started.'
                    )}
                </div>
            </div>
        );
    }
}

export default Staff;
