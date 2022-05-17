import React from 'react';

class Ex7_2 extends React.Component {
  handelClick = () => {
    this.setState({
      display: this.state.display === 'block' ? 'none' : 'block',
    });
  };

  state = { display: 'block' };
  render() {
    return (
      <div
        style={{ width: '200px', height: '350px', border: '1px solid black' }}
      >
        <button onClick={this.handelClick}>show/hide</button>
        <div
          style={{
            width: '80%',
            height: '80%',
            backgroundColor: 'yellow',
            margin: '15px',
            display: this.state.display,
          }}
        ></div>
      </div>
    );
  }
}

export default Ex7_2;
