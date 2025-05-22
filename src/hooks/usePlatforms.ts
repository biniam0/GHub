import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client"
import { Platform } from "./useGames";
import apiClient from "../services/api-client";

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
  });

export default usePlatforms;
