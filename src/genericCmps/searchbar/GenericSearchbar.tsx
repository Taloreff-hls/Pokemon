import { searchbarStyles } from "./styles";
import { GenericSearchbarProps } from "./interfaces";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const GenericSearchbar = ({
  state,
  placeholder = "Search",
  value = "",
  onChange,
  disabled = false,
}: GenericSearchbarProps) => {
  const stateStyle = searchbarStyles.states[state] || {};

  const inputStyles = {
    ...searchbarStyles.base,
    ...stateStyle,
    ...(disabled ? searchbarStyles.states.disabled : {}),
    "&:focus": searchbarStyles.states.pressed,
  };

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
        disabled={disabled}
      />
    </Box>
  );
};

export default GenericSearchbar;
