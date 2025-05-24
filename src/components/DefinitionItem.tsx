import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
 return <Box>
    <Heading as="dt" fontSize="md" color="gray.600">
      {term}
    </Heading>
    <dd>{children}</dd>
  </Box>;
};

export default DefinitionItem;
