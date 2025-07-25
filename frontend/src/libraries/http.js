import axios from "axios"
let http
if(import.meta.env.DEV){
    http=axios.create({baseURL:"http://localhost:3000"})//object sebagai argument
}else{
    http=axios.create({baseURL:"https://ip-b.muhammad-raihan.net"})
}

export default http