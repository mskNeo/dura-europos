import React, { useState, useEffect } from 'react';
import { getHome, getAllCoins } from '../api';

function Home() {
    const [ name, setName ] = useState('hi');
    const [ emperors, setEmperors ] = useState({});

    useEffect(() => {
        getHome()
            .then((response) => {
            const data = response.data;
            console.log(data);
            setName(data.name);
            });
        getAllCoins()
            .then(res => {
                let empObj = {};
                res.data.forEach(coin => {
                    empObj[coin.Emperor] = coin["Emperor Rule - End Date "];
                });
                setEmperors(empObj);
            });
    }, []);

    useEffect(() => {
        console.log(Object.entries(emperors).sort((a, b) => new Date(a[1]) - new Date(b[1])));
    }, [emperors]);

    return (
        <div>
            <h1>This is the home of {name}.</h1>
        </div>
    );
}

export default Home;
