import React from 'react';

class Ex7_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { display: 'block' };
  }

  render() {
    return (
      <div
        style={{
          width: '200px',
          border: '1px solid black',
          height: '250px',
        }}
      >
        <button>show / hide</button>

        <div
          style={{
            width: '80%',
            height: '80%',
            backgroundColor: 'red',
            margin: '16px',
          }}
        ></div>
      </div>
    );
  }
}

export default Ex7_1;
