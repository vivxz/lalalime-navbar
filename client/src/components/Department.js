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
            <span className="search-wrapper">
              <input className="search-bar" type="text" placeholder="Search" />
              <img src="data:image/png;base64,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"></img>
            </span>
          </span>
        </div>
      </div>
    )
  }
}

export default Department;