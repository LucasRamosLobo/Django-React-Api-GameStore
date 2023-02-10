import React from 'react';

const Cart = (props) => {
  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {props.cart.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;


