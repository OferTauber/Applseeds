import React from 'react';

class Ex11_3 extends React.Component {
  genetateBoxes = () => {
    const tamplate = [
      {
        isCheched: true,
        text: 'I agree to the Terms of Use',
      },
      {
        isCheched: true,
        text: 'I have read the terms of use',
      },
      {
        isCheched: false,
        text: 'I agree to receive offers and information on sales',
      },
      {
        isCheched: false,
        text: "I'm interested in getting the weekly newsletter",
      },
    ];

    return tamplate.map((data, key) => {
      return <CheckBox isCheched={data.isCheched} text={data.text} key={key} />;
    });
  };

  render() {
    return <div>{this.genetateBoxes()}</div>;
  }
}

// ==========================================

class CheckBox extends React.Component {
  generateInputEl = (status, id, text) => {
    if (status) {
      return (
        <>
          <input type="checkbox" id={id} defaultChecked />
          <label htmlFor={id}>{text}</label>
        </>
      );
    }
    return (
      <>
        <input type="checkbox" id={id} /> <label htmlFor={id}>{text}</label>
      </>
    );
  };

  render() {
    return (
      <div>
        {this.generateInputEl(this.props.isCheched, 1, this.props.text)}
      </div>
    );
  }
}

export default Ex11_3;
