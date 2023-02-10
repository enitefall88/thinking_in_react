import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


function FilterableProductTable({products}) {
  let [filterText, setFilterText] = useState("")
  let [productsInStock, setShowProductsInStock] = useState(false)


  return <div>
    <SearchBar
    filterText={filterText}
    setFilterText={setFilterText}
    showProductsInStock={setShowProductsInStock}
    productsInStock={productsInStock}
    />
    <ProductTable products={products}
    filterText={filterText}
    productsInStock={productsInStock}
    />
  </div>
}

export default FilterableProductTable
