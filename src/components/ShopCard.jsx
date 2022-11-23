import React from "react";

export default function ShopCard({ name, color, img, price }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{name.toUpperCase()}</div>
        <div className="card-color">{color}</div>
      </div>
      <div className="card-imgbox">
        <img className="card-img" src={img} alt="" />
      </div>
      <div className="card-bottom">
        <div className="card-price">${price}</div>
        <button className="card-btn">ADD TO CART</button>
      </div>
    </div>
  );
}
