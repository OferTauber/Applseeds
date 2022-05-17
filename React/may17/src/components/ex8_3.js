import React from 'react';

class Ex8_1 extends React.Component {
  state = { color: 'blue', num: 0, radius: '0px' };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ color: 'yellow', num: 0 });
    }, 500);
  };

  componentDidUpdate = () => {
    const colors = [
      'blue',
      'yellow',
      'green',
      'red',
      'crimson',
      'darkorange',
      'rosybrown',
      'lightcoral',
      'skyblue',
      'teal',
      'olivedrab',
      'cyan',
    ];
    const index = Math.floor(Math.random() * colors.length);
    setTimeout(() => {
      if (this.state.num !== 5) {
        this.setState({
          num: this.state.num + 1,
          color: colors[index],
        });
      } else {
        this.setState({
          num: 0,
          color: colors[index],
          radius: this.state.radius === '0px' ? '100px' : '0px',
        });
      }
    }, 500);
  };

  render() {
    return (
      <div
        className="std-size"
        style={{
          backgroundColor: this.state.color,
          borderRadius: this.state.radius,
        }}
      ></div>
    );
  }
}

export default Ex8_1;
