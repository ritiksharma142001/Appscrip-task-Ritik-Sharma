import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

function DisplayFilter() {
  const [showFilterDrop, setShowFilterDrop] = useState(false);

  const toggleFilterDrop = () => {
    setShowFilterDrop(!showFilterDrop);
  };

  return (
    <div>
      <Filter toggleFilterDrop={toggleFilterDrop} />
      <Cart showFilterDrop={showFilterDrop} />
    </div>
  );
}

export default DisplayFilter;
