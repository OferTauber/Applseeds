import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import youtube from '../src/api/youtube';
import VideoList from './components/video_list';
import VideoDetalis from './components/video_deatais';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    try {
      const respance = await youtube.get('/search', {
        params: {
          q: term,
        },
      });

      this.setState({
        videos: respance.data.items,
        selectedVideo: respance.data.items[0],
      });
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetalis video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
