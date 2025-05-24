import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  released: string;
  genre: string;
  rating_top: number;
}
