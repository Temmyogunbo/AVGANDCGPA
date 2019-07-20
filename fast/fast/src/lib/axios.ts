import axios from 'axios';

const BASE_URL = 'http://localhost:3004';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export default instance;
