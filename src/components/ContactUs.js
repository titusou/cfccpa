import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div className="contact-items">
                <div
                    className="contact-box"
                    onClick={() => {
                        window.open('https://www.facebook.com/cfccpa/');
                    }}
                >
                    <i className="fa fa-facebook-square fa-5x contact-icon-facebook" />
                    <div className="logo-text">Facebook</div>
                    <div>https://www.facebook.com/cfccpa/</div>
                </div>
                <div className="contact-box" onClick={() => (window.location.href = 'mailto:cfccpa@cfccpaloalto.org')}>
                    <i className="fa fa-envelope-square fa-5x contact-icon-mailto" />
                    <div className="logo-text">Email</div>
                    <div>cfccpa@cfccpaloalto.org</div>
                </div>
                <div className="contact-box" onClick={() => (window.location.href = 'tel:+6505464215')}>
                    <i className="fa fa-phone-square fa-5x contact-icon-tel" />
                    <div className="logo-text">Phone</div>
                    <div>(650) 546-4215</div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
