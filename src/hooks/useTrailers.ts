import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/API-Client";



const useTrailers = (gameId: number) =>{
 const apiClient = new APIClient <Trailer>(`/games/${gameId}/movies`)
return useQuery({ 
    queryKey: ['trailers', gameId], 
    queryFn: apiClient.getAll, 
})
}

export default useTrailers; 