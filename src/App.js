import React, { useState } from 'react';
import Login from './components/Login.js';
import Tarefas from './components/Tarefas.js';

function App() {
  const [estaLogado, setEstaLogado] = useState(false); 

  
  const handleLogin = () => {
    setEstaLogado(true); 
  };

  return (
    <div>
      {!estaLogado ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Tarefas />
      )}
    </div>
  );
}

export default App;
