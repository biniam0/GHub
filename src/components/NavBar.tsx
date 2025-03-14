import { HStack, Image} from "@chakra-ui/react"
import reactImg from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
        <Image src={reactImg}></Image>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar