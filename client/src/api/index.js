import axios from 'axios';

const url = 'http://localhost:3001/api';

const getHome = () => axios.get(url);
const getMap = () => axios.get(`${url}/map`);

export { getHome, getMap }