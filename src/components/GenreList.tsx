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
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({
  selectedGenreId,
  onSelectGenre: onSelectGenre,
}: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Heading paddingY="10px" fontSize="3xl">
        Genre
      </Heading>
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
        {data?.results.map((genre) => (
          <ListItem paddingY="2.5px" key={genre.id}>
            <HStack key={genre.id}>
              <Image
                src={genre.image_background}
                boxSize="30px"
                objectFit="cover"
                borderRadius={8}
              ></Image>
              {selectedGenreId === genre.id ? (
                <Badge>
                  <Button
                    onClick={() => onSelectGenre(genre)}
                    fontSize="lg"
                    key={genre.id}
                    variant="link"
                    textAlign="left"
                    whiteSpace="normal"
                  >
                    {genre.name}
                  </Button>
                </Badge>
              ) : (
                <Button
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  key={genre.id}
                  variant="link"
                  textAlign="left"
                  whiteSpace="normal"
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
