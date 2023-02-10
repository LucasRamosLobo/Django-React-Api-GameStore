import React, { useState } from 'react';
import Orders from './Orders';

const Cart = ({ cart, setCart }) => {
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(10);
    const [showOrder, setShowOrder] = useState(false);
  
    React.useEffect(() => {
      let newTotal = 0;
      cart.forEach(product => {
        newTotal += product.price;
      });
      setTotal(newTotal + shipping);
    }, [cart, shipping]);
  
    const handleRemove = product => {
      const newCart = cart.filter(p => p.id !== product.id);
      setCart(newCart);
    };
  
    const handleOrder = () => {
      setShowOrder(true);
    };
  
    return (
      <div>
        { showOrder ? <Orders cart={cart} total={total} /> : (
          <div>
            <h2>Carrinho</h2>
            <ul>
              {cart.map(product => (
                <li>
                  <img src={require(`./assets/${product.image_url}`)} alt={product.image_url} /> ({product.price})
                  <button onClick={() => handleRemove(product)}>Remover</button>
                </li>
              ))}
            </ul>
            <p>
              Total: {total}
            </p>
            <button onClick={handleOrder}>Pedir</button>
          </div>
        )}
      </div>
    );
  };

export default Cart;
