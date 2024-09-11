import { searchbarStyles } from "./styles";
import { GenericSearchbarProps } from "./interfaces";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const GenericSearchbar = ({
  placeholder = "Search",
  value = "",
  onChange,
  disabled = false,
  width,
}: GenericSearchbarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Box sx={searchbarStyles.container}>
      <SearchIcon sx={searchbarStyles.icon} />
      <Box
        component="input"
        type="text"
        sx={{
          ...searchbarStyles.base,
          ...(value && !isFocused ? searchbarStyles.filled : {}),
          ...(disabled && searchbarStyles.disabled),
          ...(width && { width }),
        }}
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
