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
        <div className='homepage'>
            <div className='pageText'>
                <h1 className='heading'>About</h1>
                <p className='subheading'>Our Purpose</p>
                <p className='body'>
                    The Coins of Dura-Europos project is a Yale University and Yale University Art Gallery affiliated project.
                    The goal of the project is to make the Dura-Europos numismatic corpus available in a user-friendly digital format.
                    Like other catastrophe sites, such as Pompeii, the context of a siege and lack of continuous subsequent inhabitation makes the numismatic profile of Dura-Europos a particularly relevant asset to the study of the Roman Economy.
                </p>

                <p className='subheading'>Our Sources</p>
                <p className='body'>
                    While the American Numismatic Society published the first ten hoards of Dura and there was a final publication on the coins of Dura, until now the paper medium and differing format across catalogs has made the work on the hoard material difficult.
                    We have strived to get this source material into a form that would be able to referenced quickly.
                </p>

                <p className='subheading'>Future Goals</p>
                <p className='body'>
                    Future goals of the project would include the reassembly of the hoards and digitization of their images at the Yale University Art Gallery.
                    The publication of further details about the hoards which were not published by the ANS is also desirable.
                    Finally, the corpus of single finds at the site are in need of considerable study.
                </p>

                <p className='subheading'>Our Team</p>
                <p className='body'>
                    Rachel Blumenthal, Kevin Hoffman (project lead), Mahdeen (Neo) Khan, Mathew Miller, Mofeed Nagib, Feranmi Oluwadairo, Kishan Patel, Taylor Tran, Kenneth Yan
                </p>

                <p className='thanks'>
                    Special thanks to Prof. Anne Chen, Prof. Holly Rushmeier, Cheng’an He, and Ziming Lui for everything this semester.
                </p>
            </div>
            <img className="duraHoards" src={require('../assets/images/Dura-hoards.png')} alt="hoards"/>
        </div>
    );
}

export default Home;
