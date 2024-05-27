import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="category-bar">
      <button className="category-button active">전체</button>
      <button className="category-button">음악</button>
      <button className="category-button">믹스</button>
      <button className="category-button">라이브</button>
      <button className="category-button">최근에 업로드된 동영상</button>
      <button className="category-button">감상한 동영상</button>
      <button className="category-button">새로운 맞춤 동영상</button>
    </div>
  );
}

export default Filter;
