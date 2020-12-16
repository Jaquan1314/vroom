import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div className="formCont">
        <h1>Search for a Vehicle</h1>
        <form>
          <input
            type="text"
            placeholder="car make"
            value={this.props.SearchTerm}
            onChange={this.props.changeHandler}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchForm;
