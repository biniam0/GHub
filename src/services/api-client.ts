import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ce7352d959ab4a8abb746010a5fb2811"
    }
})