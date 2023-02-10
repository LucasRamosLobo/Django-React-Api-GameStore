import React, { useState, useEffect } from 'react';

const Header = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/api/user_profile/')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <header>
      <h1>Bem-vindo, {userData.username}</h1>
    </header>
  );
};

export default Header;
