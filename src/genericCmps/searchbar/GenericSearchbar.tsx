import { searchbarStyles } from "./styles";
import { GenericSearchbarProps } from "./interfaces";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const GenericSearchbar = ({
  state,
  placeholder = "Search",
  value = "",
  onChange,
  disabled = false,
}: GenericSearchbarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const stateStyle = searchbarStyles.states[state] || {};

  const inputStyles = {
    ...searchbarStyles.base,
    ...stateStyle,
    ...(value && !isFocused ? searchbarStyles.states.filled : stateStyle),
    ...(disabled ? searchbarStyles.states.disabled : {}),
    "&:focus": searchbarStyles.states.pressed,
    "&:hover": searchbarStyles.states.hover,
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Box sx={searchbarStyles.container}>
      <SearchIcon sx={searchbarStyles.icon} />
      <Box
        component="input"
        type="text"
        sx={inputStyles}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
      {!isFocused && value && (
        <CloseIcon
          sx={searchbarStyles.closeIcon}
          onClick={() => onChange("")}
        />
      )}
    </Box>
  );
};

export default GenericSearchbar;
