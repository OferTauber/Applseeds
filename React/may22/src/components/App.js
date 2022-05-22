import React, { Component } from 'react';
import Controllers from './control_bar/control';

class App extends Component {
  state = { jokeText: '' };

  capturJoke = (joke) => {
    this.setState({ jokeText: joke });
  };

  render() {
    return (
      <div>
        <Controllers passJokeToApp={this.capturJoke} />
        {this.state.jokeText && <p>{this.state.jokeText}</p>}
      </div>
    );
  }
}

export default App;
