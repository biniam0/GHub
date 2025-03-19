import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.png";
import thumbsUp from "../assets/thumbs-up.svg";
import bullsEye from "../assets/bullseye.svg";
interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: {[key: number]: ImageProps} = {
    3: { src: meh, alt: "meh", boxSize:"25px"},
    4: { src: thumbsUp, alt: "recommended", boxSize:"25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize:"35px" },
  };
  return <Image {...emojiMap[rating]} paddingTop="3px" />;
};

export default Emojis;
