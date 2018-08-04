import React from 'react';


export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      range: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRange = this.handleRange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    this.props.searchMethod(this.state.search);
  }

  handleSearch(e) {
    let search = e.target.value;
    this.setState({search});
  }

  handleRange(e) {
    let range = e.target.value;
    // console.log('JFOEIF',this.state);
    this.setState({range}, () => console.log('JFOEIF',this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleSearch} placeholder='search reddit'/>
        <input type='number' min='1' max='100' onChange={this.handleRange}/>
      </form>
    );
  }

}



// on failure it should add a class to the form called error and turn the form's inputs borders red */

