import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './location.css';

class Location extends Component {
    constructor(props) {
        super(props);

        this.mapUrl =
            'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJtd9QHLq7j4ARBSjhR9ouPRQ&key=AIzaSyCVmRXWSX44BRAiL91sjYmANELPUNqjWiw';
    }

    renderAddress() {
        const { addressClassName } = this.props;

        return (
            <div className={addressClassName || 'location-address'} onClick={() => window.open(this.mapUrl)}>
                <div>4000 Middlefield Rd</div>
                <div>Building I</div>
                <div>Palo Alto, CA 94303</div>
            </div>
        );
    }

    renderMap() {
        return (
            <div className="location-map-container">
                <iframe allowFullScreen className="location-map" frameBorder="0" src={this.mapUrl} title="map" />
            </div>
        );
    }

    renderTitle() {
        return <div className="location-title">Come Visit Us @ Cubberley Community Center</div>;
    }

    render() {
        const { addressOnly } = this.props;

        return (
            <div>
                {addressOnly ? null : this.renderTitle()}
                {this.renderAddress()}
                {addressOnly ? null : this.renderMap()}
            </div>
        );
    }
}

Location.propTypes = {
    addressOnly: PropTypes.bool,
    addressClassName: PropTypes.string,
};

export default Location;
