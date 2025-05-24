import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entities/Platform";
import { Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatFormProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatFormProps) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    PlayStation: FaPlaystation,
    Xbox: FaXbox,
    Android: FaAndroid,
    Linux: FaLinux,
    Nintendo: SiNintendo,
    "Apple Macintosh": FaApple,
    iOS: MdPhoneIphone,
  };
  return (
    <HStack marginY="10px">
      {platforms?.map((platform) => (
        <Icon as={iconMap[platform.name]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
