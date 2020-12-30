import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/game-web-1c62d/us-central1/api'
     // the API icloud functional URL
});

export default instance;