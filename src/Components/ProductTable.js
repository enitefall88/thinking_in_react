import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({products, productsInStock, filterText}) {

  let rows = []
  let lastCategory = null

  products.map(((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
      //does not return anything here if that filterText does not hit
    }

    if (productsInStock && !product.stocked) {
      console.log("here")
      return
    }

    if (product.category !== lastCategory) {
      rows.push(
          <ProductCategoryRow
              category={product.category}
              key={product.category}
          />
      )
    }
    rows.push(
        <ProductRow
            product={product}
            key={product.name}
        />
    )
    lastCategory = product.category
  }))


  return <div>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th> Price</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  </div>
}
