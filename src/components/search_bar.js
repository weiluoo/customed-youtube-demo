import React, { Component } from 'react'

// Create a new component. This component should produce some HTML
/*  package component using a function
const SearchBar = () => {
  return <input />; // React.createElement
};
*/

/*  package component using class
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}
*/

class SearchBar extends Component {
  constructor(props) {  // initialize state
    super(props);

    this.state = { term: '' };
  }

  render() {
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={(event) => console.log(event.target.value)} />;
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  };
}

export default SearchBar;
