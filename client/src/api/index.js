import axios from 'axios';

const url = 'http://localhost:3001/api';

export const fetchUrl = () => axios.get(url);