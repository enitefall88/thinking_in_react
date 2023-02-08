import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


function FilterableProductTable({products}) {
  return <div>
    <SearchBar/>
    <ProductTable products={products}/>
  </div>
}

export default FilterableProductTable
