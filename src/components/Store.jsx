import React, { useState } from "react";

import IconSwitch from "./IconSwitch";

import CardsView from "./CardsView";

import ListView from "./ListView";

export default function Store({ products }) {
  const [icon, setIcon] = useState("view_list");

  function onSwitch() {
    setIcon(icon === "view_list" ? "view_module" : "view_list");
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === "view_list" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </>
  );
}
