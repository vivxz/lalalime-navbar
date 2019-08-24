import React from 'react';

class Women extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="activity">
        <div className="dropdown-content">
          <span className="activity-title">activities</span>
          <span className="activity-border"> </span>
          <span className="activity-types"><span className="act-under">Yoga</span></span>
          <span className="activity-types"><span className="act-under">Running</span></span>
          <span className="activity-types"><span className="act-under">Training</span></span>
          <span className="activity-types"><span className="act-under">Swim</span></span>
          <span className="activity-types"><span className="act-under">Office Travel Commute</span></span>
        </div>
        <div className="entire-collection">
          <div className="item-collection">
            <ul className="items">
              <li className="list">What's New</li>
              <li className="list">Best Sellers</li>
              <li className="list">Selfcare</li>
              <li className="list">Wunder Under Shop</li>
              <li className="list">Align Shop</li>
              <li className="list">Lap Shop</li>
              <li className="list">We Made Too Much</li>
              <li className="list">View All</li>
            </ul>
          </div>
          <span className="category-border"> </span>
          <div className="all-items">
            <div className="clothing-types">
              <h4>Tops</h4>
              <ul className="items">
                <li className="item">Tank Tops</li>
                <li className="item">Dresses</li>
                <li className="item">Short Sleeve Shirts</li>
                <li className="item">Long Sleeve Shirt</li>
                <li className="item">Sweaters</li>
                <li className="item">Hoodies + Sweatshirts</li>
                <li className="item">Jackets + Coats</li>
                <li className="item">Swimsuits</li>
              </ul>
            </div>
            <div className="clothing-types">
              <h4>Bottoms</h4>
              <ul className="items">
                <li className="item">Pants</li>
                <li className="item">Capris</li>
                <li className="item">Shorts</li>
                <li className="item">Skirts</li>
              </ul>
            </div>
            <div className="clothing-types">
              <h4>Bras + Underwear</h4>
              <ul className="items">
                <li className="item">Sports Bras</li>
                <li className="item">Bralettes</li>
                <li className="item">Underwear</li>
                <li className="item">Bodysuits</li>
              </ul>
            </div>
            <div className="clothing-types">
              <h4>Accessories</h4>
              <ul className="items">
                <li className="item">Bags</li>
                <li className="item">Yoga Mats + Props</li>
                <li className="item">Hats + Hair Accessories</li>
                <li className="item">Scarves + Wraps + Gloves</li>
                <li className="item">Water Bottles</li>
                <li className="item">Socks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Women;