import React from 'react';

const Miscellaneous = (props) => (
  <ul className="miscellaneous-ul">
    {props.listItems.map((type) => (
      <li className="miscellaneous-li" key={type}>{type}</li>
    ))}
  </ul>
)

export default Miscellaneous;