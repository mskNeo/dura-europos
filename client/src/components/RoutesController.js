import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Map from './Map';
import Catalogs from './Catalogs';
import Navbar from '../components/Navbar/Navbar';
import Viz from './Viz';

export default function RoutesController() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/map' element={<Map />}/>
                <Route path='/catalogs' element={<Catalogs />}/>
                <Route path='/viz' element={<Viz />}/>

            </Routes>
        </BrowserRouter>
    )
}
