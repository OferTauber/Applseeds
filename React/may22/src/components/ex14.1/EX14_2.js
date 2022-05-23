import React, { Component } from 'react';

class EX14_1 extends Component {
  state = { value: '' };

  copyToClipcoard = (text) => {
    window.navigator.clipboard.writeText(text);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.copyToClipcoard(this.state.value)}>
          Copy to clipboard
        </button>
      </div>
    );
  }
}

export default EX14_1;
