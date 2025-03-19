import { HStack, Image} from "@chakra-ui/react"
import ghub from "../assets/ghub.png"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface NavBarProps {
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: NavBarProps) => {
  return (
    <HStack padding="20px">
        <Image src={ghub} width="40px" borderRadius="20px"></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar