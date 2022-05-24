import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          className="ui form"
          onSubmit={(e) => {
            this.onFormSubmit(e);
          }}
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.onInputChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
