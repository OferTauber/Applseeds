import axios from 'axios';
import React, { Component } from 'react';

class Controllers extends Component {
  capturJoke = (joke) => {
    this.props.passJokeToApp(joke);
  };

  render() {
    return (
      <nav>
        <RandomJoke passJokeToControllers={this.capturJoke} />
        <Categorys passJokeToControllers={this.capturJoke} />
      </nav>
    );
  }
}

class RandomJoke extends Component {
  state = { jokeText: '' };

  getRannomJoke = async () => {
    try {
      cons;
      const joke = await axios.get('https://api.chucknorris.io/jokes/random');
      this.props.passJokeToControllers(joke.data.value);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return <button onClick={this.getRannomJoke}>Random Joke</button>;
  }
}

class Categorys extends Component {
  state = { buttons: [] };

  genetareButtons = (category, index) => {
    return (
      <button
        key={index}
        data-category={category}
        onClick={(event) => this.getJokeByCategory(event)}
      >
        {category}
      </button>
    );
  };

  getJokeByCategory = async (event) => {
    try {
      const joke = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${event.target.dataset.category}`
      );
      // console.log(joke.data.value);
      this.props.passJokeToControllers(joke.data.value);
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {
    try {
      const categorysList = await axios.get(
        'https://api.chucknorris.io/jokes/categories'
      );
      const buttons = await categorysList.data.map(this.genetareButtons);
      this.setState({ buttons: buttons });
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return <div>{this.state.buttons}</div>;
  }
}

export default Controllers;
