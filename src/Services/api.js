import axios from "axios"

export const api = axios.create({
  baseURL: 'https://serrafunko.herokuapp.com/ecommerce/'
  //baseURL: 'http://localhost:8080/ecommerce/'
})