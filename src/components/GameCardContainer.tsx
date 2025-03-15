import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCCProps {
    children: ReactNode
}
const GameCardContainer = ({children}: GameCCProps) => {
  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
    >{children}</Box>
  );
};

export default GameCardContainer;
