import React from 'react';

const Girls = (props) => {
  return (
    <div className="activity">
      <div className="dropdown-content">
        <span className="activity-title">activities</span>
        <span className="activity-border"> </span>
        <span className="activity-types"><span className="act-under">Swim</span></span>
        <span className="activity-types"><span className="act-under">Dance</span></span>
        <span className="activity-types"><span className="act-under">Gymnastics</span></span>
        <span className="activity-types"><span className="act-under">Gym</span></span>
        <span className="activity-types"><span className="act-under">Tennis</span></span>
      </div>
      <div className="entire-collection-girl">
        <div className="item-collection-girl">
          <ul className="items">
            <li className="list">What's New</li>
            <li className="list">Bestsellers</li>
            <li className="list">Back To School Essentials</li>
            <li className="list">Rhythmic Shop</li>
            <li className="list">We Made Too Much</li>
            <li className="list">View All</li>
          </ul>
        </div>
        <span className="category-border-girl"> </span>
        <div className="all-items">
          <div className="clothing-types">
            <h4 className="cloth">Tops</h4>
            <ul className="items">
              <li className="item">Bras</li>
              <li className="item">T-Shirts + Tanks</li>
              <li className="item">Bodysuits + Leotards</li>
              <li className="item">Short Sleeve Shirt</li>
            </ul>
          </div>
          <div className="clothing-types">
            <h4 className="space clothes"></h4>
            <ul className="items">
              <li className="item">Long Sleeve Shirt</li>
              <li className="item">Sweatshirts + Hoodies</li>
              <li className="item">Jackets + Coats</li>
              <li className="item">Swimsuits</li>
            </ul>
          </div>
          <div className="clothing-types">
            <h4 className="clothes">Bottoms</h4>
            <ul className="items">
              <li className="item">Pants</li>
              <li className="item">Capris</li>
              <li className="item">Shorts</li>
              <li className="item">Skirts + Dresses</li>
            </ul>
          </div>
          <div className="clothing-types">
            <h4 className="clothes">Accessories</h4>
            <ul className="items">
              <li className="item">Bags</li>
              <li className="item">Headbands + Hats</li>
              <li className="item">Scarves + Gloves</li>
              <li className="item">Socks + Underwear</li>
              <li className="item">Water Bottles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Girls;