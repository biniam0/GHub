import { HStack, Image} from "@chakra-ui/react"
import reactImg from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <HStack padding="20px">
        <Image src={reactImg}></Image>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar