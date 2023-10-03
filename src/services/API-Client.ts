import axios from "axios"; 

export interface FetchResponse <T>{ 
    count: number; 
    results: T[]; 
}

export default axios.create({ 
    baseURL: 'https://api.rawg.io/api', 
    params: {
    key: '6a13f34751ae4d57be5b19654f40033a'
    }
})