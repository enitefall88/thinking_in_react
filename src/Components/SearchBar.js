import React from "react";
export  default function SearchBar() {
  return  <form>
    <input type="text" placeholder="Search here..."/>
    <label>
      <input type="checkbox" className="rounded text-pink-500"/>
      {" "}
      Only show products in stock
    </label>
  </form>

}
