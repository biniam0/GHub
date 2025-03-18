import { Card, CardBody, Heading, HStack, Image, Skeleton, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/image_ph.jpg"

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <Card borderRadius="10px" overflow="hidden">
        { game.background_image ? <Image src={getCroppedImageUrl(game.background_image)}></Image> : <Image src={noImage}/>}
        <CardBody>
          <Heading fontSize="20px">{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic} />
          </HStack>
          {game.released && <Text>{game.released.split("-")[0]}</Text>}
        </CardBody>
      </Card>
    </>
  );
};
