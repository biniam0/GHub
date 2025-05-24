import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      style={{ width: "70%", textAlign: "center" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInput.current) {
          setSearchText(searchInput.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius="12px"
          variant="filled"
          placeholder="Search games... "
          ref={searchInput}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
