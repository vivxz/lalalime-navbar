import React from 'react';

class Department extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <img id="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png" />
        <div className="dep">
          <span className="departments">
            <span className="words">women</span>
            <span className="words">men</span>
            <span className="words">girls</span>
            <span className="words">community</span>
            <span className="words">selfcare</span>
          </span>
        </div>
        <div className="signin">
          <span>
            <span className="word">sign in</span>
            <span className="border"> </span>
            <input className="search-bar" type="text" placeholder="Search" />
            <div></div>
          </span>
        </div>
      </div>
    )
  }
}

export default Department;