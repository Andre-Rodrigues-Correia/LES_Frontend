import axios from "axios";

function api(prod){
    if (prod){
        return axios.create({
            baseURL: 'https://sch-backend-spring.herokuapp.com'
        })
    }
    
    return axios.create({
        baseURL: 'http://localhost:8080'
    })
}

export default api;