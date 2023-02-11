import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cart from './Carrinho';
import '../App.css';

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
    <div className='list'>
      <Header />
      <h1 className='center'>Produtos</h1>
      <ul className='wrap'>
        {products.map(product => (
          <><><li key={product.id}>{product.name}</li>
          <li>preço: {product.price}</li>
            <li><img src={require(`./assets/${product.image_url}`)} alt={product.image} /></li>
            </>
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button></>
        ))}
      </ul>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default List;