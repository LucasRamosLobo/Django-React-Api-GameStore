import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (product) => {
    cart.splice(cart.indexOf(product), 1);
    setCart([...cart]);
  };

  const total = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} ({product.price})
            <button onClick={() => removeFromCart(product)}>Remover</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <p>Total: {total}</p>
      )}
    </div>
  );
};

export default Cart;


