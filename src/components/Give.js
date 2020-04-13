import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';

class Give extends Component {
    render() {
        return (
            <div className="give">
                <div className="page-title-block page-title-block-bg-default">
                    <div className="page-title">Giving</div>
                </div>
                <div className="give-header">
                    Thank you for your generosity and supporting Community for Christ Church of Palo Alto.
                </div>
                <div className="give-subheader">
                    Here are the following ways you can donate.
                </div>
                <div className="cfccpa-cards">
                    <Card className="cfccpa-card">
                        <CardContent>
                            <div className="cfccpa-card-name">Online</div>
                            <div className="cfccpa-card-description">Donations can be made via PayPal. PayPal accepts most major credit cards and debit cards. Click on the "Donate" button below.</div>
                            <div className="cfccpa-card-description-centered mt-15">
                                <div>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="L7DUFYGKJTA6Q" />
                                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="cfccpa-card">
                        <CardContent>
                            <div className="cfccpa-card-name">Cash or Checks</div>
                            <div className="cfccpa-card-description">Checks should be made out to "Community for Christ Church of Palo Alto". Donations can be deposited in person into any of our offering boxes or mailed to:</div>
                            <div className="cfccpa-card-description-centered mt-10">
                                <div>Community for Christ Church of Palo Alto</div>
                                <div>4000 Middlefield Rd</div>
                                <div>Building I</div>
                                <div>Palo Alto, CA 94303</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="cfccpa-card">
                        <CardContent>
                            <div className="cfccpa-card-name">Stock</div>
                            <div className="cfccpa-card-description">If you want to make a gift of stock or securities, please let us know so we can properly handle the process. Email Augustin Chang for details: <a href="mailto:chang162@aol.com">chang162@aol.com</a>.</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Give;
