import React, { Component } from 'react';

class EX14_1 extends Component {
  componentDidMount() {
    this.searchInput.focus();
  }
  render() {
    return (
      <div>
        <label>Search </label>
        <input ref={(inputEl) => (this.searchInput = inputEl)} type="text" />
      </div>
    );
  }
}

export default EX14_1;
