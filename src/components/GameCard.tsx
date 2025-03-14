import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <Card borderRadius="10px" overflow="hidden">
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <Text>{game.released}</Text>
        </CardBody>
      </Card>

    </>
  );
};
