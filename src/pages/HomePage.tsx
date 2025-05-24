import { Grid, Show, GridItem, Stack, HStack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "12% 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingLeft="10px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Stack paddingLeft="30px">
          <GameHeading />
          <HStack spacing="10px">
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Stack>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default HomePage