import React from "react";
import "../styles/VideoCard.css";
import uploader from "../assets/content/uploader.png";

function VideoCard({ video }) {
  // 구조 분해 할당 사용하기
  const { thumbnail, title, uploader, views, date } = video;
  return (
    <div className="videoCard">
      <img src={thumbnail} alt={title} className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <img className="videoCard_uploader" src={uploader}></img>
        <div className="videoCard__info__wrapper">
          <h4>{title}</h4>
          <h5>{uploader}</h5>
          <h6>{`조회수 ${views}만회 · ${date}`}</h6>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
