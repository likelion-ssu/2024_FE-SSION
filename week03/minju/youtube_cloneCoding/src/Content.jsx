import React from "react";
import VideoCard from "./components/VideoCard";
import "./styles/Content.css";
import thumb1 from "././assets/content/content1.png";
import thumb2 from "././assets/content/content2.png";
import thumb3 from "././assets/content/content3.png";
import thumb4 from "././assets/content/content4.png";
import thumb5 from "././assets/content/content5.png";
import thumb6 from "././assets/content/content6.png";

function Content() {
  const videos = [
    {
      id: 1,
      title:
        "최신 케이팝 노동요 총모음집🤍🐰 | 하루종일 틀어두는 매장음악 kpop 광고없는 노동요",
      thumbnail: thumb1,
      uploader: "사용자1",
      views: "1000",
      date: "10개월 전",
    },
    {
      id: 2,
      title: "[Playlist] 비트 맛집 남자아이돌 케이팝 노동요",
      thumbnail: thumb2,
      uploader: "사용자2",
      views: "2000",
      date: "9시간 전",
    },
    {
      id: 3,
      title:
        "코딩 / 과제 할 때 집중 해서 듣기 좋은 음악 • Relaxing lofi beats to study music • Lofi Coding Beats",
      thumbnail: thumb3,
      uploader: "사용자3",
      views: "3000",
      date: "22시간 전",
    },
    {
      id: 4,
      title: "[PLAYLIST] 출근길을 활기로 가득 채워줄 플리",
      thumbnail: thumb4,
      uploader: "사용자4",
      views: "4000",
      date: "1개월 전",
    },
    {
      id: 5,
      title:
        "비내리는 뉴욕 저녁의 분위기 🌧 빗소리와 재즈피아노 4시간 | 가사없는노래 | Design making tutorial",
      thumbnail: thumb5,
      uploader: "사용자5",
      views: "5000",
      date: "1주 전",
    },
    {
      id: 6,
      title:
        "【지브리】 행복한 기분 🌊 지브리 스튜디오에서 8시간의 릴렉스 음악",
      thumbnail: thumb6,
      uploader: "사용자6",
      views: "6000",
      date: "2주 전",
    },
  ];

  return (
    <div className="content">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default Content;
