import React, { Component } from 'react';
import axios from 'axios';
// import data from '../ex12.2/data';

class EX13_1 extends Component {
  captureRowData = (data) => {
    this.setState({ rowData: data });
  };

  captureProccedsData = (data) => {
    this.setState({ peapoleArr: data });
  };

  captureUserInput = (userInput) => {
    this.setState({ userFilterInput: userInput });
  };

  hideSpinner = () => {
    this.setState({ dispaySpinner: false });
  };

  state = {
    dispaySpinner: true,
    avatars: [],
    userFilterInput: '',
  };

  async componentDidMount() {
    try {
      const rowData = await axios.get('https://randomuser.me/api/?results=10');
      const rellevantData = rowData.data.results.map(
        ({ name, picture }, index) => {
          return {
            name: `${name.first} ${name.last}`,
            picture: picture.large,
            key: index,
          };
        }
      );

      this.setState({
        dispaySpinner: false,
        avatars: rellevantData,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <Input passInputToParent={this.captureUserInput} />
        <br />
        <br />

        {this.state.dispaySpinner && <Spinner />}
        <Avatars
          template={this.state.avatars}
          filter={this.props.userFilterInput}
        />
      </div>
    );
  }
}

export default EX13_1;
// ! ================================================
const Spinner = () => {
  return <h1>Loading...</h1>;
};

const Avatars = ({ template, filter }) => {
  const generateCards = (data, filter) => {
    const rowData = data.filter((person) => {
      if (filter) {
        return person.name.includes(filter);
      } else {
        return true;
      }
    });

    return rowData.map((person) => {
      return (
        <Card key={person.key} name={person.name} imgSrc={person.picture} />
      );
    });
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {generateCards(template, filter)}
    </div>
  );
};

const Card = ({ name, imgSrc }) => {
  return (
    <div style={{ width: '200px', border: '2px solid black', height: '200px' }}>
      <h3>{name}</h3>
      <img src={imgSrc} />
    </div>
  );
};

class Input extends Component {
  state = { userInput: '' };

  onInputChange = (event) => {
    this.setState({ userInput: event.target.value });
    this.props.passInputToParent(this.state.userInput);
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.userInput}
        onChange={this.onInputChange}
      />
    );
  }
}
