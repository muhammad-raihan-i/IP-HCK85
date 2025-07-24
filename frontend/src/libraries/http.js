import axios from "axios"
let http
if(import.meta.env.DEV){
    http=axios.create({baseURL:"http://localhost:3000"})//object sebagai argument
}else{
    http=axios.create({baseURL:"https://localhost:3000"})
}

export default http