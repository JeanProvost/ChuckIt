import { create } from 'apisauce';

const apiClient = create({
    baseURL: "http://localhost:9000/api",
    timeout: 500, 
});

export default apiClient;