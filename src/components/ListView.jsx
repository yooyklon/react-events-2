import React from "react";

import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  return (
    <div className="items-list mt-20">
      {items.map((obj) => (
        <ShopItem {...obj} key={obj.id} />
      ))}
    </div>
  );
}
