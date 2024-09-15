import axios from 'axios'
const productionUrl = 'https://strapi-store-server.onrender.com/api/'

export const convenientFetch = axios.create({
  baseURL: productionUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
