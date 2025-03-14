import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "0a8646e12cf24b0aa1d4f81482df3d62"
    }
})