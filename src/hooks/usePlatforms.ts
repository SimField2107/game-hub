
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/API-Client";
import { FetchResponse } from "../services/API-Client";
import PlatformSelector from "../components/PlatformSelector";
import platforms from '../data/platforms';

export interface Platform { 
    id: number; 
    name: string; 
    slug: string; 
}

const usePlatforms = () =>
 useQuery({ 
    queryKey: ['platforms'], 
    queryFn: () => 
    APIClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
    .then((res) => res.data), 
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms, 

});

export default usePlatforms

