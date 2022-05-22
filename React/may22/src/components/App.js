import React, { Component } from 'react';
// import EX12_1 from './ex12.1/ex12.1';
import EX12_2 from './ex12.2/ex12.2';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Controllers passJokeToApp={this.capturJoke} />
        {this.state.jokeText && <p>{this.state.jokeText}</p>} */}
        {/* {<EX12_1 />} */}
        {<EX12_2 />}
      </div>
    );
  }
}

export default App;
