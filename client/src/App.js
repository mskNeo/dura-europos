import React, { useState, useEffect } from 'react';
import './App.css';
import * as api from './api';

function App() {
  const [ name, setName ] = useState('');
  
  useEffect(() => {
    api.fetchUrl()
    .then((response) => {
      const data = response.data;
      console.log(data);
      setName(data.name);
    });
  }, []);
  
  return (
    <div className="App">
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
