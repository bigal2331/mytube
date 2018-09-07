import React from 'react';

const VideoList = (props) => {
    let videoItems = props.videos.map((video) => {
        console.log(video)
        return <VideoListItem video={video} />
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}




export default VideoList;