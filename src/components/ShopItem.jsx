import React from "react";

export default function ShopItem({ name, color, img, price }) {
  return (
    <div className="item">
      <div className="item-imgbox">
        <img className="item-img" src={img} alt="" />
      </div>
      <div className="item-title">{name}</div>
      <div className="item-color">{color}</div>
      <div className="item-price">${price}</div>
      <button className="item-btn">ADD TO CART</button>
    </div>
  );
}
