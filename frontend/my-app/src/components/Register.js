import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password2,
        }),
      });

      const data = await response.json();
      if (data){
        navigate('/');
        alert('usuario criado com sucesso, agora faça o login')
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
    <Header />
    <div className='container'>
    <form className='form-group' onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label></label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label></label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label></label>
      <input
        type="password"
        placeholder="confirme"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <label></label>
      <button className='btn' type="submit">Register</button>
    </form>
    </div>
    </div>
  );
};

export default Register;