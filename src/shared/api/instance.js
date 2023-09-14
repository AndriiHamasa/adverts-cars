import axios from "axios";

const instance = axios.create({
    baseURL: "https://649e9c40245f077f3e9ca5d1.mockapi.io"
})

export default instance