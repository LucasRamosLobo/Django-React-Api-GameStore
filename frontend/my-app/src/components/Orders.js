const Orders = props => {
    return (
      <div>
        <h2>Pedidos</h2>
        <ul>
          {props.cart.map(product => (
            <li key={product.id}>
             <img src={require(`./assets/${product.image_url}`)} alt={product.image_url} /> ({product.price})
            </li>
          ))}
        </ul>
        <p>
          Total: {props.total}
        </p>
      </div>
    );
  };
  
  export default Orders;