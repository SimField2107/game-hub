import axios, { AxiosRequestConfig } from "axios"; 

export interface FetchResponse <T>{ 
    count: number; 
    results: T[]; 
}

const axiosInstance = axios.create({ 
    baseURL: 'https://api.rawg.io/api', 
    params: {
    key: '6a13f34751ae4d57be5b19654f40033a'
    }
})

class APIClient<T> { 
    endpoint: string; 

    constructor(endpoint: string) { 
        this.endpoint = endpoint; 
    }

    getAll = (config: AxiosRequestConfig) => { 
        return axiosInstance 
        .get<FetchResponse<T>>(this.endpoint)
        .then(res => res.data); 
    }
}

export default APIClient; 