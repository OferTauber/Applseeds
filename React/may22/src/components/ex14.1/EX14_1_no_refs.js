import React, { Component } from 'react';

class EX14_1N extends Component {
  componentDidMount() {
    setTimeout(() => {
      const el = document.querySelector('input');
      console.log(el);
      el.focus();
    }, 200);
  }
  render() {
    return (
      <div>
        <label>Search </label>
        <input className="input" type="text" />
      </div>
    );
  }
}

export default EX14_1N;
