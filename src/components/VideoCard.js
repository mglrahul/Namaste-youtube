import React from "react";

const VideoCard = ({ video }) => {
  if (!video) return null;
  const { snippet, statistics } = video;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={snippet.thumbnails.high.url}
        alt="video"
      />
      <ul>
        <li className="font-bold py-2">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({video}) => {
  return (
    <div className="p-1 m-1 border border-red-800">
      <VideoCard video={video}/>
    </div>
  )
}


export default VideoCard;
