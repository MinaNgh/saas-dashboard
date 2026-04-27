import axios from "axios";

// implementing SaaS pattern
const apiClient = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout:5000,
});

export default apiClient;