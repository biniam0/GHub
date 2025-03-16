import { Text, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem paddingY="2.5px">
            <HStack >
              <Image
                src={genre.image_background}
                boxSize="30px"
                borderRadius={8}
              ></Image>
              <Text fontSize="lg" key={genre.id}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
