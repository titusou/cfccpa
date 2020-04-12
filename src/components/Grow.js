import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Email } from '@material-ui/icons';

import fellowshipSisters from '../assets/fellowship-sisters.png';

import './grow.css';

class Grow extends Component {
    renderCard(name, description, contacts = [], image) {
        return (
            <Card className="cfccpa-card">
                {image ? <CardMedia className="cfccpa-card-img" component="img" image={image} /> : null}
                <CardContent>
                    <div className="cfccpa-card-name">{name}</div>
                    <div className="cfccpa-card-description">{description}</div>
                </CardContent>
                {contacts.length > 0 ? (
                    <CardActions className="cfccpa-card-actions" disableActionSpacing>
                        {contacts.map(contact => {
                            const { email, name } = contact || {};
                            return (
                                <Button color="primary" href={`mailto:${email}`} key={email}>
                                    <Email className="mr-5" />
                                    {name}
                                </Button>
                            );
                        })}
                    </CardActions>
                ) : null}
            </Card>
        );
    }
    render() {
        return (
            <div className="grow">
                <div className="grow-header page-title-block-bg-default">
                    <div>
                        <div className="grow-header-text-lg">GROW</div>
                        <div className="grow-header-text-sm">
                            in <span className="grow-header-text-keyword">faith</span>
                        </div>
                        <div className="grow-header-text-sm">
                            in <span className="grow-header-text-keyword">relationships</span>
                        </div>
                        <div className="grow-header-text-sm">
                            in <span className="grow-header-text-keyword">community</span>
                        </div>
                    </div>
                </div>
                <div className="grow-title">Our Fellowship Groups</div>
                <div className="cfccpa-cards">
                    <Card className="cfccpa-card">
                        <CardMedia className="cfccpa-card-img" component="img" image={fellowshipSisters} />
                    </Card>
                    {this.renderCard(
                        'Manna',
                        'A fellowship group for young adults. We meet every other Sunday afternoon.',
                        [
                            { email: 'linyingcui@gmail.com', name: 'Linying Cui' },
                            { email: 'rjchow@gmail.com', name: 'Rosie Chow' },
                        ]
                    )}
                    {this.renderCard('Vine', 'Vine meets on the 2nd and 4th Fridays of the month at 8:00 PM.', [
                        { email: 'julie_tai_99@yahoo.com', name: 'Julie Tai' },
                        { email: 'chang162@aol.com ', name: 'Augustin Chang' },
                    ])}
                    {this.renderCard('Elim', 'Elim meets on the 1st and 3rd Saturdays of the month at 7:00 PM.', [
                        { email: 'yaolihua081@gmail.com', name: 'Li Hua Yao' },
                    ])}
                </div>
                <div className="grow-title">Join a Bible Study Group</div>
                <div className="bible-study cfccpa-cards">
                    {this.renderCard(
                        'Morning Bible Reading',
                        'We get together on a regular basis at 7:00 AM bright and early in the morning to read and discuss passages as we read through the Bible together. Join us in our WeChat group at (831) 392-6627.'
                    )}
                    {this.renderCard(
                        'Evening Bible Reading',
                        'Finish off a long day by diving into the word of God. We get together regularly at 9:30 PM. Join us in our WeChat group at (650) 387-6112.'
                    )}
                    {this.renderCard(
                        'Stevenson House',
                        <div>
                            <div>
                                Bible study at Stevenson senior-housing every Friday from 6:30 PM to 7:30 PM. You can
                                find us in the basement floor of Building A.
                            </div>
                            <div className="mt-15" />
                            <div>Address:</div>
                            <div>455 E. Charleston Road</div>
                            <div>Building A</div>
                            <div>Palo Alto, CA 94306</div>
                        </div>,
                        [{ email: 'yichunsteve@cfccpaloalto.org', name: 'Elder Steve Cheng' }]
                    )}
                </div>
            </div>
        );
    }
}

export default Grow;
