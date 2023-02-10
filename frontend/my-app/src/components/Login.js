import React, { useState } from 'react';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email
        })
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        history.push('/');
      }
    } catch (error) {
      setError('Ocorreu um erro ao tentar fazer login, por favor, tente novamente mais tarde.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div>
        <label htmlFor="email">senha</label>
        <input type="password" id="password" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;