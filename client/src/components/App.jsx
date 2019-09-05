import React from 'react';
import axios from 'axios';
// import Search from './Search.js';
import DropdownContent from './Dropdown.jsx';
import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'women': false,
      'men': false,
      'girls': false,
      'community': false,
      'selfcare': false
    };
    this.getAll = this.getAll.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
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
            <svg style={{ fill: '#d22030', position: 'relative', bottom: '10px', right: '20px' }} width='32px' height='32px' viewBox='0 0 35 35'>
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
            <input className="search-bar" type="text" placeholder="Search" />
            <img className="mag" src="data:image/png;base64,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"></img>
            <button className="button3"><img src="https://www.dropbox.com/s/9x1thy0qyk9dudw/carticon.svg?raw=1" width="30px" height="30px" position="relative" top="12px" /></button>
          </span>
        </div>
      </div>
    )
  }
}

export default App;