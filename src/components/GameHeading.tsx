import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformId);
  let heading = `${genre?.name || ""} ${
    platform?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY="10px">
      {heading}
    </Heading>
  );
};

export default GameHeading;
