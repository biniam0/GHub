import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const { selectedPlatform: platform } = usePlatform(gameQuery.platformId);
  let heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading as="h1" marginY="10px">
      {heading}
    </Heading>
  );
};

export default GameHeading;
