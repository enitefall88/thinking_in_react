import React from "react";

export default function ProductTable() {
  return <div>
    <table className="table-auto">
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
