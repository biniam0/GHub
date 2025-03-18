import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
    onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch}: SearchInputProps) => {
    const searchInput = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInput.current) onSearch(searchInput.current.value)
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
