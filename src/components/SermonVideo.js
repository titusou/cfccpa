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
                <div className="sermon-video-header">全心全意愛你的家</div>
                {this.renderVideo('79Du2JiK-JU')}
            </div>
        );
    }
}

export default SermonVideo;
