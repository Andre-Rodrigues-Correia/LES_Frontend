import axios from "axios";

//http://localhost:8080
//https://sch-backend-spring.herokuapp.com
const api = axios.create({
    baseURL: 'https://sch-backend-spring.herokuapp.com'
});

export default api;
