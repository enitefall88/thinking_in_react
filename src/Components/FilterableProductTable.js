import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


function FilterableProductTable({products}) {
  let [searchName, setSearchName] = useState("")
  let [productsInStock, setShowProductsInStock] = useState(products)

  function showProductsInStock() {
    setShowProductsInStock(products.filter(product =>
      product.stocked === true
    ))

  }
  return <div>
    <SearchBar
    searchName={searchName}
    setSearchName={setSearchName}
    showProductsInStock={showProductsInStock}
    />
    <ProductTable products={productsInStock}/>
  </div>
}

export default FilterableProductTable
