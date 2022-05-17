import React from 'react';

class Ex9_1 extends React.Component {
  state = { display: true };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ display: false });
    }, 4000);
  };

  render() {
    if (this.state.display) {
      const rand = Math.random();

      if (rand < 0.33) return <Spinner />;
      if (rand < 0.66) return <Flicker />;
      return <Jumper />;
    }
  }
}

class Spinner extends React.Component {
  render() {
    return <div id="spinner-1" className="ring spinner"></div>;
  }
}
class Flicker extends React.Component {
  render() {
    return (
      <div id="flicker" className="dots spinner">
        <div className="dot-l dot"></div>
        <div className="dot-m dot"></div>
        <div className="dot-r dot"></div>
      </div>
    );
  }
}
class Jumper extends React.Component {
  render() {
    return (
      <div class="flex-item">
        <div id="jump" className="dots spinner">
          <div className="dot-l dot"></div>
          <div className="dot-m dot"></div>
          <div className="dot-r dot"></div>
        </div>
      </div>
    );
  }
}

export default Ex9_1;
