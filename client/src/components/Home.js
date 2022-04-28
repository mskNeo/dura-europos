import React, { useState, useEffect } from 'react';
import { getHome } from '../api';

function Home() {
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
            <h1>This is the home of {name}.</h1>
        </div>
    );
}

export default Home;
