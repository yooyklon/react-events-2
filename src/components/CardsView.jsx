import React from "react";

import ShopCard from "./ShopCard";

export default function CardsView({ cards }) {
  return (
    <div className="cards-list mt-20">
      {cards.map((obj) => (
        <ShopCard {...obj} key={obj.id} />
      ))}
    </div>
  );
}
