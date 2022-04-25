import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Map from './Map';
import Navigation from '../components/Navigation';

export default function RoutesController() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/map' element={<Map />}/>
            </Routes>
        </BrowserRouter>
    )
}
