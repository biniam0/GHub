import { Badge } from "@chakra-ui/react";

interface CriticProps {
    score: number
}

const CriticScore = ({score}: CriticProps) => {
    let color = score > 75 ? "lightgreen" : score > 600 ? "lightyellow" : ""
  return (
    <>
      <Badge color={color} width="35px" height="20px" alignContent={"center"} textAlign={"center"}>{score}</Badge>
    </>
  );
};

export default CriticScore;
