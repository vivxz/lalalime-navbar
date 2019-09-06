import React from 'react';

const Subheaders = (props) => (
  <ul className="subheaders-ul">
    {props.subHeaders.map((subHeader, index) => (
      <li key={subHeader.title}>
        <ul className="subheader-ul">
          <li className="subheader-li" style={{ fontWeight: '600', letterSpacing: '2px', borderBottom: 'none' }}>{subHeader.title}</li>
          {subHeader.related.map((type, idx) => (
            <li className="subheader-li" key={idx}><span className="underline">{type}</span></li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)

export default Subheaders;