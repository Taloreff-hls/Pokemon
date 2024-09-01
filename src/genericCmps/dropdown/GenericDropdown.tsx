import { useState } from "react";
import Box from "@mui/material/Box";
import { GenericDropdownProps, DropdownItem } from "./interfaces";
import { dropdownStyles } from "./styles";
import GenericSearchbar from "../searchbar/GenericSearchbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const GenericDropdown = ({
  options,
  label,
  withSearch = false,
  onSelect,
  placeholder,
}: GenericDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item.label);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Box sx={dropdownStyles.container}>
      <Box onClick={toggleDropdown} sx={dropdownStyles.trigger}>
        {selectedItem?.label ?? label}
        <KeyboardArrowDownIcon />
      </Box>
      {isOpen && (
        <Box sx={dropdownStyles.menu}>
          {withSearch && (
            <GenericSearchbar
              value={searchValue}
              onChange={setSearchValue}
              placeholder={placeholder}
            />
          )}
          <Box sx={dropdownStyles.list}>
            {filteredOptions.map((option) => (
              <Box
                key={option.label}
                onClick={() => handleSelect(option)}
                sx={dropdownStyles.item}
              >
                <Box sx={dropdownStyles.leftItems}>
                  {option.icon && (
                    <Box sx={dropdownStyles.icon}>{option.icon}</Box>
                  )}
                  {option.label}
                </Box>
                {option.attack && (
                  <Box sx={dropdownStyles.attack}>
                    {option.attack}
                    <Box sx={dropdownStyles.px}>px</Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default GenericDropdown;
