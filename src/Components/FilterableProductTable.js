import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


function FilterableProductTable({products}) {
  let [searchName, setSearchName] = useState("")
  return <div>
    <SearchBar
    searchName={searchName}
    setSearchName={setSearchName}
    />
    <ProductTable products={products}/>
  </div>
}

export default FilterableProductTable
