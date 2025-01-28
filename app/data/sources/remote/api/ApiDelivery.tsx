import axios from "axios";

const ApiDelivery = axios.create({
    //cómo vamos a enviar y recibir los datos
    baseURL: "http://192.168.73.209:8080/api",
    headers:{
        "Content-Type": "application/json",
    }
})

export {ApiDelivery};