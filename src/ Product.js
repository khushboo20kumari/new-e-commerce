// // import React, { useState } from "react";

// const Product = ({ id, name, price, addTopCard }) => {

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>${price}</p>
//       <button onClick={() => addTopCard({ id, name, price })}>Add to Cart</button>
//     </div>
//   );
// };

// export default Product;


// import React, { useState } from "react";

const Product = ({ id, name, price, addToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
    </div>
  );
};

export default Product;
