import React from "react";
import "./VideoCard.css";
import uploader from "./assets/content/uploader.png";

function VideoCard({ video }) {
  return (
    <div className="videoCard">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="videoCard__thumbnail"
      />
      <div className="videoCard__info">
        <img className="videoCard_uploader" src={uploader}></img>
        <div className="videoCard__info__wrapper">
          <h4>{video.title}</h4>
          <h5>{video.uploader}</h5>
          <h6>{`조회수 ${video.views}만회 · ${video.date}`}</h6>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
