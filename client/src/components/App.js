import React from 'react';
import axios from 'axios';
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios
      .get('/search')
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <Search />
        <div className="body"> </div>
      </div>
    )
  }
}

export default App;