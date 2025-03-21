import { BsChevronDown } from "react-icons/bs";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface SSProps {
  sortOrder: string
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: SSProps) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontWeight="normal"
        >
          Order by: {currentSortOrder ? currentSortOrder.label : "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map(({ value, label }) => (
            <MenuItem
              onClick={() => onSelectSortOrder(value)}
              key={value}
              value={value}
            >
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
