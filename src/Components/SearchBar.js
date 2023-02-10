import React from "react";
export  default function SearchBar({setFilterText, filterText, showProductsInStock}) {

  return  <form>
    <input type="text" placeholder="Search here..."
    value={filterText}
    onChange={(event) => setFilterText(event.target.value)}
    />
    <label>
      <input type="checkbox" className="rounded text-pink-500"
      onChange={(event) => {showProductsInStock(event.target.checked)}}
      />
      {" "}
      Only show products in stock
    </label>
  </form>

}
