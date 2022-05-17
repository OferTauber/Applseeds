import React from 'react';

class Ex7_3 extends React.Component {
  increment = () => {
    if (this.state.num < 10) {
      this.updateNum(1);
    }
  };

  decrement = () => {
    if (this.state.num > -10) {
      this.updateNum(-1);
    }
  };

  updateNum = (update) => {
    const num = this.state.num + update;
    this.updateColor(num);
    this.setState({ num: num });
  };

  updateColor = (num) => {
    if (num < 0) this.setState({ color: 'red' });
    if (num > 0) this.setState({ color: 'green' });
    if ((num = 0)) this.setState({ color: 'black' });
  };

  state = { num: 0, color: 'black' };
  render() {
    return (
      <div>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
        <h2 style={{ color: this.state.color }}>{this.state.num}</h2>
      </div>
    );
  }
}

export default Ex7_3;
