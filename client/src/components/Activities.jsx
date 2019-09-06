import React from 'react';

const Activities = (props) => (
  <div className="activities-wrapper">
    <div className="activities-title">ACTIVITIES</div>
    <ul className="activities-ul">
      {props.listItems.map((category, index) => (
        <li className="activities-li" key={index}><span className="underline">{category}</span></li>
      ))}
    </ul>
  </div>
)

export default Activities;