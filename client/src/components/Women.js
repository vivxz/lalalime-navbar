import React from 'react';

class Women extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="activity">
        <span className="activity-title">activities</span>
        <span className="activity-border"> </span>
        <span className="activity-types"><span className="act-under">Yoga</span></span>
        <span className="activity-types"><span className="act-under">Running</span></span>
        <span className="activity-types"><span className="act-under">Training</span></span>
        <span className="activity-types"><span className="act-under">Swim</span></span>
        <span className="activity-types"><span className="act-under">Office Travel Commute</span></span>
      </div>
    )
  }
}

export default Women