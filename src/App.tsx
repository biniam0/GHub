// import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
// import "./App.css";
// import GameGrid from "./components/GameGrid";
// import GameHeading from "./components/GameHeading";
// import GenreList from "./components/GenreList";
// import NavBar from "./components/NavBar";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
// import useGameQueryStore from "./stores/gameQueryStore";

// export interface GameQuery {
//   genreId?: number;
//   platformId?: number;
//   sortOrder?: string;
//   searchText?: string;
// }

// function App() {
//   // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
//   const { gameQuery, setGenreId, setPlatformId, setSortOrder, setSearchText } =
//     useGameQueryStore();
//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "aside main"`,
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "12% 1fr",
//       }}
//     >
//       <GridItem area="nav">
//         <NavBar></NavBar>
//       </GridItem>

//       <Show above="lg">
//         <GridItem area="aside" paddingLeft="10px">
//           <GenreList />
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <Stack paddingLeft="30px">
//           <GameHeading />
//           <HStack spacing="10px">
//             <PlatformSelector />
//             <SortSelector />
//           </HStack>
//         </Stack>
//         <GameGrid ></GameGrid>
//       </GridItem>
//     </Grid>
//   );
// }

// export default App;
