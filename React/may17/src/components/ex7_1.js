import React from 'react';

class Ex7_1 extends React.Component {
  handelClick = () => {
    this.setState({ num: this.state.num + 1 });
  };

  state = { num: 0 };
  render() {
    return (
      <div>
        <button onClick={this.handelClick}>add</button>
        <h2>{this.state.num}</h2>
      </div>
    );
  }
}

export default Ex7_1;
