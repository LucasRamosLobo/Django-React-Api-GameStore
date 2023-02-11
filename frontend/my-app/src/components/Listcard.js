import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cart from './Carrinho';
import '../App.css';

const List = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortType, setSortType] = useState('/api/products/');

  useEffect(() => {
    fetch(`http://localhost:8000/${sortType}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, [sortType]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart)
  };
  
  const handleClick = (event) => {
    event.preventDefault();
    setSortType(event.target.value);
  };

  return (
    <div className='list'>
      <Header />
      <h1 className='center'>Produtos</h1>
      <div className='container'>
      <div className='sort-options'>
        <button className='btn' value='/api/price/' onClick={handleClick}>Ordenar por preço</button>
        <button className='btn' value='/api/score/' onClick={handleClick}>Ordenar por popularidade</button>
      </div>
      <ul className='wrap'>
        {products.map(product => (
          <><span className='product' key={product.id}>{product.name}<br></br> preço: {product.price}
          
            <img className='card-image' src={require(`./assets/${product.image_url}`)} alt={product.image} />
            
            <button className='card-buy-button' onClick={() => addToCart(product)}>Adicionar ao carrinho</button></span></>
        ))}
      </ul>
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default List;