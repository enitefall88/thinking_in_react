import React from "react";
export default function ProductRow({product}) {
  let name = product.stocked ? product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>

  return <div>
<tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>

  </div>
}

