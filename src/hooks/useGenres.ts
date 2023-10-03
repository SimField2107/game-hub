

import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres' ; 
import APIClient from '../services/API-Client';
import FetchResponse from '../hooks/useData'; 

export interface Genre { 
    id: number; 
    name: string; 
    image_background: string;  
}


const useGenres = () => useQuery({ 
    queryKey: ['genres'], 
    queryFn: () => 
    APIClient
    .get<FetchResponse<Genre>('/genres')
    .then((res) => res.data), 
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres}

})



export default useGenres; 





