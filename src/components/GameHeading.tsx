import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { selectedPlatform: platform } = usePlatform(platformId)

  let heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading as="h1" marginY="10px">
      {heading}
    </Heading>
  );
};

export default GameHeading;
