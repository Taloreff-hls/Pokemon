import { GenericTabProps } from "./interfaces";
import { tabStyles } from "./styles";
import { Box, Button } from "@mui/material";

const GenericTab = ({ state, label, icon: Icon, onClick }: GenericTabProps) => {
  const stateStyle = tabStyles.states[state] || {};

  return (
    <Button sx={tabStyles.container} onClick={onClick} disableRipple>
      <Box sx={{ ...tabStyles.base, ...stateStyle }}>
        <Icon sx={tabStyles.icon} />
        {label}
      </Box>
    </Button>
  );
};

export default GenericTab;
