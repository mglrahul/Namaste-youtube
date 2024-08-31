import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const response = await data.json();
    // console.log(response);
    setVideos(response.items);
    // return response.json()
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
