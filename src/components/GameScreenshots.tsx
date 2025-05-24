import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenShots";
interface GameScreenshotsProps {
  game_pk: string;
}

const GameScreenshots = ({ game_pk }: GameScreenshotsProps) => {
  const { data, error, isLoading } = useScreenshots(game_pk);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <Heading paddingY={2} fontSize="34px">
        ScreenShots
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={3}>
        {data?.results.map((file) => (
          <Image
            key={file.id}
            src={file.image}
            borderRadius={15}
            _hover={{
              transform: "scale(1.02)",
              transition: "transform .10s ease-in",
            }}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
