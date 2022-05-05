import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Map from './Map';
import Navbar from '../components/Navbar/Navbar';

export default function RoutesController() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/map' element={<Map />}/>
            </Routes>
        </BrowserRouter>
    )
}
