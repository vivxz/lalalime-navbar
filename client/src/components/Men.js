import React from 'react';

const Men = (props) => {
  return (
    <div className="activity">
      <div className="dropdown-content">
        <span className="activity-title">activities</span>
        <span className="activity-border"> </span>
        <span className="activity-types"><span className="act-under">Training</span></span>
        <span className="activity-types"><span className="act-under">Running</span></span>
        <span className="activity-types"><span className="act-under">Yoga</span></span>
        <span className="activity-types"><span className="act-under">Office Travel Commute</span></span>
        <span className="activity-types"><span className="act-under">Golf</span></span>
      </div>
      <div className="entire-collection">
        <div className="item-collection-men">
          <ul className="items">
            <li className="list">What's New</li>
            <li className="list">Bestsellers</li>
            <li className="list">Lululemon X Barry's</li>
            <li className="list">Selfcare</li>
            <li className="list">ABC Pants Shop</li>
            <li className="list">Metal Vent Tech Collection</li>
            <li className="list">Lab Shop</li>
            <li className="list">We Made Too Much</li>
            <li className="list">View All</li>
          </ul>
        </div>
        <span className="category-border"> </span>
        <div className="all-items">
          <div className="clothing-types">
            <h4 className="cloth">Tops</h4>
            <ul className="items">
              <li className="item">Short Sleeve Shirts</li>
              <li className="item">Polos</li>
              <li className="item">Long Sleeve Shirts</li>
              <li className="item">Button Down Shirts</li>
            </ul>
          </div>
          <div className="clothing-types">
            <h4 className="space clothes"></h4>
            <ul className="items">
              <li className="item">Tank Tops</li>
              <li className="item">Hoodies + Sweatshirts</li>
              <li className="item">Jackets + Coats</li>
            </ul>
          </div>
          <div className="clothing-types">
            <h4 className="clothes">Bottoms</h4>
            <ul className="items">
              <li className="item">Pants</li>
              <li className="item">Joggers</li>
              <li className="item">Shorts</li>
              <li className="item">Tights</li>
              <li className="item">Underwear</li>
              <li className="item">Swim Trunks</li>
            </ul>
          </div>
          <div className="clothing-types">
            <h4 className="clothes">Accessories</h4>
            <ul className="items">
              <li className="item">Bags</li>
              <li className="item">Yoga Mats + Props</li>
              <li className="item">Hats</li>
              <li className="item">Socks</li>
              <li className="item">Water Bottles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Men;