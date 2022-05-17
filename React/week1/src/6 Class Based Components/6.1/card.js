import React from 'react';

const Card2 = ({ img, title, desc }) => {
  return (
    <div class="ui card">
      <div class="image">
        <img src={img} />
      </div>
      <div class="content">
        <a class="header">{title}</a>

        <div class="description">{desc}</div>
      </div>
      <div class="extra content">
        <p>
          <a>SHEAR</a> <a>EXPLORE</a>
        </p>
      </div>
    </div>
  );
};

class Card extends React.Component {
  render({ img, title, desc }) {
    return (
      <div class="ui card">
        <div class="image">
          <img src={img} />
        </div>
        <div class="content">
          <a class="header">{title}</a>

          <div class="description">{desc}</div>
        </div>
        <div class="extra content">
          <p>
            <a>SHEAR</a> <a>EXPLORE</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Card2;
