import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './image_list';
import unsplash from './api/unsplash';

class App extends Component {
  state = { images: [] };

  onSerchSubmit = async (term) => {
    try {
      const jetchedData = await unsplash.get('/search/photos', {
        params: { query: term },
      });

      this.setState({ images: jetchedData.data.results });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSerchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
