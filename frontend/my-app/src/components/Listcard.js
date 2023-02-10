import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);
  console.log(products[1])
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <><li key={product.id}>{product.name}</li><li><img src={require(`./assets/${product.image_url}`)} alt={product.image} /></li></>
        ))}
      </ul>
    </div>
  );
};

export default App;