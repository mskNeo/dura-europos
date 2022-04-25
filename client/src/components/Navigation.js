import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

export default function Navigation() {
    return (
        <div id="navbar">
            <div id="nav-items">
                <Link to="/">Home</Link>
                <Link to="/map">Map</Link>
            </div>
        </div>
    )
}
