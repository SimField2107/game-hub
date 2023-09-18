import axios from "axios"; 

export default axios.create({ 
    baseURL: 'https://api.rawg.io/api', 
    params: {
    key: '6a13f34751ae4d57be5b19654f40033a'
    }
})