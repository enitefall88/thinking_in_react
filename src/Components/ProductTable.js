import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({products}) {

  let rows = []
  let lastCategory = null

  products.map(((product, index) => {
    if (product.category !== lastCategory) {
      rows.push(
          <ProductCategoryRow
              category={product.category}
              key={index}
          />
      )
    }
    rows.push(
        <ProductRow
            product={product}
            key={index}
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
