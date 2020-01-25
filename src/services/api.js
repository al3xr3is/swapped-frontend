import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/swapped-backend/us-central1/apiService',
  baseURL: 'https://us-central1-swapped-backend.cloudfunctions.net/apiService',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json;charset=utf-8;',
  }
});



export default api;