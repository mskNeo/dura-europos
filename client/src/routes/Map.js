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
        <div>
            <h1>This page is the {title} page.</h1> 
        </div>
    )
}

export default Map;