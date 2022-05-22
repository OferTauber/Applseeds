import React, { Component } from 'react';
import Data from './data';

class Ex12_2 extends Component {
  state = {
    names: [],
    olds: [],
  };

  captureNames = (names) => {
    this.setState({ names: names });
  };

  captureOlds = (olds) => {
    this.setState({ olds: olds });
  };

  render() {
    return (
      <div>
        <DataMussaging
          callbacks={{
            passNamesToParent: this.captureNames,
            passOldsToParent: this.captureOlds,
          }}
        />

        <Name names={this.state.names} />
        <Card peapole={this.state.olds} />
      </div>
    );
  }
}

class DataMussaging extends Component {
  geNames = (data) => {
    return data.map((person) => person.name);
  };

  getOlds = (data) => {
    return data.filter((person) => person.birthday.split('-')[2] * 1 <= 1990);
  };

  componentDidMount() {
    const data = Data;
    this.props.callbacks.passNamesToParent(this.geNames(data));
    this.props.callbacks.passOldsToParent(this.getOlds(data));
  }

  render() {
    return <></>;
  }
}

class Name extends Component {
  massageNames = (names) => {
    return names.map((name, index) => {
      return <div key={index}>{name}</div>;
    });
  };

  render() {
    return <div>{this.massageNames(this.props.names)}</div>;
  }
}

class Card extends Component {
  generateCrdsArr = (data) => {
    return <div>{data.map(this.createCard)}</div>;
  };

  createCard = (person, index) => {
    return (
      <div
        className="card"
        key={index}
        style={{ width: '300px', height: '150px', border: '1px solid black' }}
      >
        <h4>Name: {person.name}</h4>
        <p>Birthday: {person.birthday}</p>
        <p>Favorite meats: {person.favoriteFoods.meats.join(' ')}</p>
        <p>Favorite fish: {person.favoriteFoods.fish.join(' ')}</p>
      </div>
    );
  };

  render() {
    return <div>{this.generateCrdsArr(this.props.peapole)}</div>;
  }
}

export default Ex12_2;
