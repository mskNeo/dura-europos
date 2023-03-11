import React, { useState, useEffect } from 'react';
import { getAllCoins } from '../api';

export default function DataVis() {
    const [ emperors, setEmperors ] = useState({});

    useEffect(() => {
        getAllCoins()
            .then(res => {
                let empObj = {};
                res.data.forEach(coin => {
                    empObj[coin.Emperor] = coin["Emperor Rule - End Date "];
                });
                setEmperors(empObj);
            });
    }, []);

    return (
        <div>
            <h1>Interactive Scatterplot</h1>
            <a href="http://localhost:8080/">Click here for Visualization</a>
        </div>
    )
}
