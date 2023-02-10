import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cart from './Carrinho';

const List = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart)
  };

  return (
    <div>
      <Header />
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <><><li key={product.id}>{product.name}</li>
            <li><img src={require(`./assets/${product.image_url}`)} alt={product.image} /></li>
            </><span>preço: {product.price}</span>
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button></>
        ))}
      </ul>
      <Cart cart={cart} />
    </div>
  );
};

export default List;