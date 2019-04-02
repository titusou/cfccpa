import React, { Component } from 'react';

import ContactUs from './ContactUs';
import Location from './Location';

class ContactUsWrapper extends Component {
    render() {
        return (
            <div className="contact-us-wrapper">
                <div className="contact-us-wrapper-title-block">
                    <div className="contact-us-wrapper-title">Questions? Comments?</div>
                    <div className="contact-us-wrapper-subtitle">We'd love to hear from you!</div>
                </div>
                <ContactUs />
                <Location />
            </div>
        );
    }
}

export default ContactUsWrapper;
