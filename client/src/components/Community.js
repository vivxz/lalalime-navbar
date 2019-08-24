import React from 'react';

const Community = (props) => {
  return (
    <div className="entire-collection-comm">
      <div className="all-items">
        <div className="comm-types">
          <h4 className="cloth">Stories</h4>
          <ul className="items comm">
            <li className="item">Up-Close + Personal</li>
            <li className="item">Our Gear</li>
            <li className="item">This Just In</li>
            <li className="item">The SweatLife</li>
          </ul>
        </div>
        <div className="comm-types">
          <h4 className="cloth">Ambassadors</h4>
          <ul className="items comm">
            <li className="item">Elite</li>
            <li className="item">Store</li>
            <li className="item">Global Yoga</li>
            <li className="item">Learn More</li>
          </ul>
        </div>
        <div className="comm-types">
          <h4 className="cloth">Event</h4>
          <ul className="items comm">
            <li className="item">Festivals + Retreats</li>
            <li className="item">Sweat With Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Community;