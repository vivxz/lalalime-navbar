import React from 'react';

const Subheaders = (props) => (
  <ul className="subheaders-ul">
    {props.subHeaders.map((subHeader) => (
      <li key={subHeader.title}>
        <ul className="subheader-ul">
          <li className="subheader-li" style={{ fontWeight: '600', letterSpacing: '1px', textDecoration: 'none' }}>{subHeader.title}</li>
          {subHeader.related.map((type) => (
            <li className="subheader-li" key={type}>{type}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)

export default Subheaders;