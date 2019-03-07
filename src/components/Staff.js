import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Email, Call } from '@material-ui/icons';

import johnZhou from '../assets/john-zhou.jpg';
import steveCheng from '../assets/steve-cheng.jpg';

class Staff extends Component {
    renderCard(name, image, email, phone, description) {
        return (
            <Card className="staff-card">
                {image ? <CardMedia className="staff-card-img" component="img" image={image} /> : null}
                <CardContent>
                    <div className="staff-card-name">{name}</div>
                    <div className="staff-card-description">{description}</div>
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
                <div className="staff-title-block">
                    <div className="staff-title">The Community Staff</div>
                </div>
                <div className="staff-cards">
                    {this.renderCard(
                        'Pastor Steve Cheng',
                        steveCheng,
                        'yichunsteve@cfccpaloalto.org',
                        '4087817028',
                        `Steve came to Christ during his studies in the United States. Upon graduation, Steve started a computer parts company in Silicon Valley. After running it for more than ten years, Steve made the decision to enter into full-time ministry. In 2015, Steve graduated from Overseas Theological Seminary. Steve and his wife, On Lee, are blessed with a son and two daughters.`
                    )}
                    {this.renderCard('Minister John Zhou', johnZhou)}
                </div>
            </div>
        );
    }
}

export default Staff;
