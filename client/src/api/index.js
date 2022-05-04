import axios from 'axios';

const url = 'http://localhost:3001/api';

const getHome = () => axios.get(url);
const getMap = () => axios.get(`${url}/map`);
const getAllCoins = () => axios.get(`${url}/coins`);

export { getHome, getMap, getAllCoins }