import React, { Component } from 'react';
import YouTube from 'react-youtube';

class SermonVideo extends Component {
    renderVideo(id) {
        if (!id) {
            return null;
        }

        return <YouTube className="sermon-video" videoId={id} />;
    }

    render() {
        return (
            <div className="sermon-video-container">
                <div className="sermon-video-header">因我受造奇妙可畏</div>
                {this.renderVideo('6BiE37SBY9Q')}
            </div>
        );
    }
}

export default SermonVideo;
