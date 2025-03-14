import { HStack, Image, Text } from "@chakra-ui/react"
import reactImg from "../assets/react.svg"

const NavBar = () => {
  return (
    <HStack>
        <Image src={reactImg}></Image>
        <Text> Navbar</Text>
    </HStack>
  )
}

export default NavBar