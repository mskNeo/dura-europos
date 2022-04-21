import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { getHome } from './api';
import Map from './routes/Map';
import Navigation from './components/Navigation';

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
      <h1>Dura-Europos Hordes for {name}'s Group</h1>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/map' element={<Map />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
