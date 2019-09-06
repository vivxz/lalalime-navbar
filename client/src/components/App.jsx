import React from 'react';
import axios from 'axios';
import DropdownContent from './Dropdown.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      women: false,
      men: false,
      girls: false,
      community: false,
      selfcare: false,
    };
    // this.getAll = this.getAll.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    // this.getAll();
  }

  // getAll() {
  //   axios
  //     .get('/search')
  //     .then((response) => console.log(response.data))
  //     .catch((err) => console.log(err))
  // }

  handleMouseOver(event) {
    const target = event.target.innerHTML.toLowerCase()
    this.setState({ [target]: true })
    for (let property in this.state) {
      if (this.state[property] && property !== target) this.setState({ [property]: false })
    }
  }
  handleMouseLeave() {
    for (let property in this.state) {
      if (this.state[property]) this.setState({ [property]: false })
    }
  }

  render() {
    return (
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <svg style={{ fill: '#d22030', position: 'relative', bottom: '10px', right: '20px' }} width='34px' height='34px' viewBox='0 0 35 35'>
              <path className="logo" d="M17 .5c9.4 0 17 7.6 17 17s-7.6 17-17 17-17-7.6-17-17S7.6.5 17 .5zM28.9 25c-.7.4-1.9.9-3 .9-.5 0-1-.1-1.5-.5-2.8-1.8-1.8-4 0-7.4.8-1.4 1.7-2.9 2-4.5.4-1.6.8-4-.7-5.8-.6-.9-1.7-1.6-3-2-1.4-.5-3.2-.7-5.4-.7h-.6c-2.2 0-4 .2-5.4.7-1.3.4-2.4 1.1-3 2-1.5 1.8-1.1 4.2-.7 5.8.3 1.6 1.2 3.1 2 4.5 1.8 3.4 2.8 5.6 0 7.4-.5.4-1 .5-1.5.5-1.1 0-2.3-.5-3-.9l.2.3c1.3 2.1 3.1 3.2 5 3.2.9 0 1.8-.3 2.7-.7 1-.4 1.8-1.2 2.4-2.2.6-1 .8-2.1.7-3-.2-.9-.7-2.1-1.2-3.4-1.4-3.5-3.2-8.3-1.6-10.6.7-1 1.9-1.5 3.7-1.5 1.8 0 3 .5 3.7 1.5 1.6 2.3-.2 7.1-1.6 10.6-.5 1.3-1 2.5-1.2 3.4-.1.9.1 2 .7 3s1.4 1.8 2.4 2.2c.9.4 1.8.7 2.7.7 1.9 0 3.7-1.1 5-3.2l.2-.3z"></path>
            </svg>
          </li>
          {this.props.menuItems.map((item, index) => (
            <div key={item.title}>
              <li className="nav-item" onMouseOver={this.handleMouseOver}>{item.title}</li>
              {this.state[item.title.toLowerCase()] &&
                <div>
                  <div className="border"></div>
                  <DropdownContent handleMouseLeave={this.handleMouseLeave} dropdownItems={{ subHeaders: item.subHeaders, misc: item.misc, categories: item.categories }} />
                </div>
              }
            </div>
          ))}
        </ul>
        <div className="account">
          <button className="button1">SIGN IN</button>
          <span className="search-wrapper">
            <Search />
          </span>
          <span>
            <button className="button3"><img src="./images/bag.png" width="25px" height="25px" position="relative" top="17px" /></button>
          </span>
        </div >
      </div >
    )
  }
}



export default App;