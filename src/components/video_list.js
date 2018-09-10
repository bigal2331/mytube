import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    let videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} selectVideo={props.selectVideo} />
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}




export default VideoList;