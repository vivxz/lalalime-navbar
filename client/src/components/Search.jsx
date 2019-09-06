import React from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.jsx';

const suggestions = [
  "pants", "track pants", "ABC pants", "women's pants", "men's pants", "girls pants",
  "shirts", "long sleeve shirts", "short sleeve shirts", "men's long sleeve shirts", "men's shirts", "women's shirts",
  "yellow shorts", "yellow swimsuits", "yellow tank tops"
];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      moused: false,
      searchClicked: false,
      results: [],
      suggestedOptions: []
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.suggestionChange = this.suggestionChange.bind(this);
    this.getAll = this.getAll.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    // this.getAll();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ searchClicked: false }, () => this.setState({ query: '' }));
    }
  }

  handleClickInside() {
    this.setState({ searchClicked: true });
  }

  handleChange(event) {
    this.setState({ query: event.target.value }, () => this.suggestionChange());
  }

  getAll() {
    axios
      .get('/search')
      .then((response) => this.setState({ results: response.data })
        // let array = []
        // for (var i = 0; i < response.data.length; i++) {
        //   if (response.data[i].name.includes(this.state.query) || response.data[i].color.includes(this.state.query)) {
        //     array.push(response.data[i])
        //     // console.log(array);
        //   }
        // }
        // array = array.slice(0, 4);
        // this.setState({ results: array }, () => console.log(array))
      )
      .catch((err) => console.log(err))
  }

  suggestionChange() {
    let arr = [];
    for (var i = 0; i < suggestions.length; i++) {
      if (!suggestions[i].includes(' ')) {
        if (suggestions[i].slice(0, this.state.query.length) === this.state.query) {
          arr.push(suggestions[i])
        }
      } else {
        if (suggestions[i].includes(this.state.query)) {
          arr.push(suggestions[i])
        }
      }
    }
    arr = arr.slice(0)
    this.setState({ suggestedOptions: arr }, () => console.log(this.state.query))
  }

  render() {
    return (
      <span className="search-container" >
        <span>
          <form >
            <div className="search-wrapper">
              <input tabIndex="1" value={this.state.query} ref={this.setWrapperRef} onChange={this.handleChange} onClick={this.handleClickInside} type="text" placeholder="Search" className="search-bar" ></input>
              <img className="mag" src="./images/mag.png"></img>
            </div>
          </form>
          <SearchResults searchClicked={this.state.searchClicked} query={this.state.query} results={this.state.results} suggestedOptions={this.state.suggestedOptions} />
        </span>
      </span>
    )
  }
}

export default Search;