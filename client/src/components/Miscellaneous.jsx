import React from 'react';

const Miscellaneous = (props) => (
  <ul className="miscellaneous-ul">
    {props.listItems.map((type) => (
      <li className="miscellaneous-li" key={type}><span className="underline">{type}</span></li>
    ))}
  </ul>
)

export default Miscellaneous;