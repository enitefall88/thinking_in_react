import React, {useState} from "react";
export  default function SearchBar({setSearchName, searchName}) {

  return  <form>
    <input type="text" placeholder="Search here..."/>
    <label>
      <input type="checkbox" className="rounded text-pink-500"
      onInput={() => setSearchName(searchName)}
      />
      {" "}
      Only show products in stock
    </label>
  </form>

}
