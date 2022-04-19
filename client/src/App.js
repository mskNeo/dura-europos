import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { getHome } from './api';
import Map from './routes/Map';

function App() {
  const [ name, setName ] = useState('');
  
  useEffect(() => {
    getHome()
      .then((response) => {
        const data = response.data;
        console.log(data);
        setName(data.name);
      });
  }, []);
  
  return (
    <div>
      <h1>Hello {name}</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/map' element={<Map />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
