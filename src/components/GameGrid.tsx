import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="30px"
        spacing="30px"
      >
        {isLoading
          ? skeletons.map((skeleton) => <GameCardSkeleton></GameCardSkeleton>)
          : games.map((game) => (
              <GameCard key={game.id} game={game}></GameCard>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
