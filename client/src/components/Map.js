import React, { useState, useEffect } from 'react';
import { getMap } from '../api';

function Map() {
    const [ title, setTitle ] = useState('');

    useEffect(() => {
        getMap()
            .then(response => {
                const data = response.data;
                setTitle(data.page);
            })
    }, [])

    return (
        <div id="map" className="page">
            <h1>This is the {title} page.</h1>
        </div>
    )
}

export default Map;