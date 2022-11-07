

import React from 'react';
const ProductsBody = ({ item }) => (
  <div className="d1">
   <h1>{item.name} </h1>
    <img src={item.image} alt={item.alt} />
    <p>{item.description}</p>
  </div>
)

export default ProductsBody;