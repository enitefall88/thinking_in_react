import React from "react";
import SearchBar from "./SearchBar";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductTable from "./ProductTable";
import ProductRow from "./ProductRow";

function FilterableProductTable() {
  return <div>
  <SearchBar/>
  <ProductTable/>
  </div>
}

export default FilterableProductTable
