import React from 'react';

class Ex8_1 extends React.Component {
  state = { color: 'blue' };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ color: 'yellow' });
    }, 1000);
  };

  componentDidUpdate = () => {
    document.querySelector(
      '#update'
    ).textContent = `My new favorite color is ${this.state.color}`;
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.color}</h1>
        <div id="update"></div>
      </div>
    );
  }
}

export default Ex8_1;
