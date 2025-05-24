import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APICLient<Game>("/games")

const useGame = (slug: string) => useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug)
})

export default useGame