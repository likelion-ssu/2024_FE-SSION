import React from 'react';
import dummy from '../../data/itemInfo.json';

export default function Card() {
  return (
    <div className="main">
      {dummy.cards.map(card => (
        <div className="card-frame" key={card.id}>
          <div className="card">
            <img className="card-img" src={card.img2} />
          </div>
          <div className="card-text">
            <img className="author-img" src={card.img1}></img>
            <div className="text-section">
              <p className="title">{card.title}</p>
              <p className="text-caption">{card.author}</p>
              <p className="text-caption">
                조회수 {card.views}회 ・ {card.id}년 전
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
