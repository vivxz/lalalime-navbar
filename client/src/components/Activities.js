import React from 'react';
import Women from './Women.js';
import Men from './Men.js';
import Girls from './Girls.js';

class Activities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="act-container">
        {/* CONDITIONAL RENDERING HERE */}
        <Women />
        {/* <Men />
        <Girls /> */}
      </div>
    )
  }
}

export default Activities