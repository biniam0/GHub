import { HStack, Image } from "@chakra-ui/react";
import ghub from "../assets/ghub.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <HStack padding="20px" justifyContent="space-between">
      <Link to="/">
        <Image src={ghub} width="40px" borderRadius="20px" objectFit="cover"></Image>
      </Link>
      {/* <Image
        src={ghub}
        width="40px"
        borderRadius="20px"
        onClick={() => navigate("/")}
      ></Image>  */}
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
