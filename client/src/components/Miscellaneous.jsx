import React from 'react';

const Miscellaneous = (props) => (
  <ul className="miscellaneous-ul">
    {props.listItems.map((type, index) => (
      <li className="miscellaneous-li" key={index}><span className="underline">{type}</span></li>
    ))}
  </ul>
)

export default Miscellaneous;