import {
  Text,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  Stack,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {isLoading && (
        <Stack>
          {skeletons.map((skeleton) => (
            <HStack gap="2">
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
          <ListItem paddingY="2.5px">
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="30px"
                borderRadius={8}
              ></Image>
              <Text fontSize="lg" key={genre.id}>
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
