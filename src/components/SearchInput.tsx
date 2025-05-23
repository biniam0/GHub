import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInput.current) setSearchText(searchInput.current.value);
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
