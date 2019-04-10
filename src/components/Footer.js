import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div
                    className="contact-box"
                    onClick={() => {
                        window.open('https://www.facebook.com/cfccpa/');
                    }}
                >
                    <i className="fa fa-facebook-square fa-5x contact-icon-facebook" />
                </div>
                <div className="contact-box" onClick={() => (window.location.href = 'mailto:cfccpa@cfccpaloalto.org')}>
                    <i className="fa fa-envelope-square fa-5x contact-icon-mailto" />
                </div>
                <div className="contact-box" onClick={() => (window.location.href = 'tel:+6505464215')}>
                    <i className="fa fa-phone-square fa-5x contact-icon-tel" />
                </div>
            </div>
        );
    }
}

export default Footer;
