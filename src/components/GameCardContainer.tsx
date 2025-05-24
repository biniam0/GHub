import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCCProps {
  children: ReactNode;
}
const GameCardContainer = ({ children }: GameCCProps) => {
  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
