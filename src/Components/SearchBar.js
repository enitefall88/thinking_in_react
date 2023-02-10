import React from "react";
export  default function SearchBar({setSearchName, searchName, showProductsInStock}) {

  return  <form>
    <input type="text" placeholder="Search here..."
    onInput={() => setSearchName(searchName)}
    />
    <label>
      <input type="checkbox" className="rounded text-pink-500"
      onChange={showProductsInStock}
      />
      {" "}
      Only show products in stock
    </label>
  </form>

}
