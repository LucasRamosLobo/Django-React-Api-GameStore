import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from './Header';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await response.json();

      if (data.message) {
        setErrorMessage(data.message);
        return;
      }
        if (data.user) {
          console.log(data.user);
          navigate('/products');
          
        }else{alert('coloque seus dados de login, caso nao tenha faça registro')}
      // Log in success, do something with the user data

    } catch (error) {
      setErrorMessage('Erro ao fazer login, tente novamente mais tarde');
    }
  };

  return (
    <div>
    <Header />
    <div className='container'>
    <form className='form-group' onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label></label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <label></label>
      <button className='btn' type="submit">Log In</button>
    </form>
    
    </div>
    <span className='center'>nao tem uma conta ? <a href="/register">registre-se</a></span>
    <span className='center'>caso nao queira se registrar e so ir para a rota <a href="/products"> /products</a> </span>
    </div>
  );
};

export default Login;