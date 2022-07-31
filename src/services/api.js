import axios from "axios";

//http://localhost:8080
//https://sch-backend-spring.herokuapp.com
const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export default api;