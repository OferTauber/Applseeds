import React from 'react';
import faker from 'faker';

const CommentDetail = ({ name, time, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}
        </a>
        <div className="metadata">
          <span className="date">{time}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
