import React from 'react';

class Ex11_1 extends React.Component {
  state = { selectedColor: '' };

  generateButtons = () => {
    const colors = ['blue', 'red', 'yellow'];
    // const colors = ['blue'];

    const arr = colors.map((a_color) => {
      return (
        <>
          <CustomButton color={a_color} func={this.changeColoe} key={a_color} />
          <br />
        </>
      );
    });

    return arr;
  };

  changeColoe = (newColor) => {
    this.setState({ selectedColor: newColor });
    // console.log(newColor);
  };

  render() {
    return (
      <div>
        {this.generateButtons()}
        {/* <CustomButton color="blue" func={this.changeColoe} /> */}
        <h2>The color selected is: {this.state.selectedColor}</h2>
      </div>
    );
  }
}

class CustomButton extends React.Component {
  render() {
    return (
      <button
        style={{ backgroundColor: this.props.color }}
        onClick={() => {
          this.props.func(this.props.color);
        }}
      >
        {this.props.color}
      </button>
    );
  }
}

export default Ex11_1;
