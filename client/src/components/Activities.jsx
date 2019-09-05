import React from 'react';

const Activities = (props) => (
  <div className="activities-wrapper">
    <div className="activities-title">ACTIVITIES</div>
    <ul className="activities-ul">
      {props.listItems.map((category) => (
        <li className="activities-li" key={category}>{category}</li>
      ))}
    </ul>
  </div>
)

export default Activities;