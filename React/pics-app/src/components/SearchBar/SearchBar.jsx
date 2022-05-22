import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  formOnSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.formOnSubmit} className="ui form">
          <div className="field">
            <label htmlFor="image-serch">Image Serch</label>
            <input
              value={this.state.term}
              type="text"
              id="image-serch"
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
