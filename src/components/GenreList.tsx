import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  Stack,
  Button,
  Badge,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({
  selectedGenre,
  onSelectGenre: onSelectedGenre,
}: GenreListProps) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {isLoading && (
        <Stack>
          {skeletons.map((skeleton) => (
            <HStack gap="2" key={skeleton}>
              <SkeletonCircle size="12" />
              <Stack flex="1">
                <Skeleton height="5" width="80%" borderRadius="5px" />
              </Stack>
            </HStack>
          ))}
        </Stack>
      )}

      <List>
        {data.map((genre) => (
          <ListItem paddingY="2.5px" key={genre.id}>
            <HStack key={genre.id}>
              <Image
                src={genre.image_background}
                boxSize="30px"
                borderRadius={8}
              ></Image>
              {selectedGenre?.id === genre.id ? (
                <Badge>
                  <Button
                    onClick={() => onSelectedGenre(genre)}
                    fontSize="lg"
                    key={genre.id}
                    variant="link"
                  >
                    {genre.name}
                  </Button>
                </Badge>
              ) : (
                <Button
                  onClick={() => onSelectedGenre(genre)}
                  fontSize="lg"
                  key={genre.id}
                  variant="link"
                >
                  {genre.name}
                </Button>
              )}
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
