import { HStack, Image} from "@chakra-ui/react"
import reactImg from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface NavBarProps {
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: NavBarProps) => {
  return (
    <HStack padding="20px">
        <Image src={reactImg}></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar