
import { useQuery } from "@tanstack/react-query";
import ms from 'ms'; 
import APIClient, { FetchResponse } from "../services/API-Client";
import platforms from '../data/platforms';
import  Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () =>
 useQuery({ 
    queryKey: ['platforms'], 
    queryFn: apiClient.getAll, 
    staleTime: ms('24'), 
    initialData: platforms, 

});

export default usePlatforms

