import axios from "axios"
export const setToken =(token)=>{
    const api  = axios.create({
        baseURL:"https://readjourney.b.goit.study/api"
    });
    api.defaults.headers.common["Authorization"]=`Bearer ${token}`
    return api;
}
