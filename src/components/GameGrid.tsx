import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface GameGridProps {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="30px"
        spacing="20px"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page?.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          isLoading={isFetchingNextPage} 
          colorScheme="black"
          variant="outline"
          spinnerPlacement="start"
          margin={"0 0 10px 30px"}
          onClick={() => fetchNextPage()}
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default GameGrid;