import React from 'react';

class Box extends React.Component {
  state = { display: false };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ display: true });
    }, 1000);
  };

  componentDidUpdate = () => {
    setTimeout(() => {
      this.setState({ display: false });
    }, 4000);
  };

  render() {
    if (this.state.display) {
      return (
        <div
          className="pop-box"
          style={{ width: this.props.size, height: this.props.size }}
        ></div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Box;
