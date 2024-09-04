import { GenericTabProps } from "./interfaces";
import { tabStyles } from "./styles";
import { Box, Button } from "@mui/material";

const GenericTab = ({
  label,
  icon: Icon,
  onClick,
  isSelected,
}: GenericTabProps) => {
  return (
    <Button sx={tabStyles.container} onClick={onClick} disableRipple>
      <Box sx={tabStyles.innerContainer}>
        <Box sx={tabStyles.base}>
          <Icon sx={tabStyles.icon} />
          <Box
            sx={{
              ...tabStyles.label,
              fontWeight: isSelected ? 700 : 400,
            }}
          >
            {label}
          </Box>
        </Box>
        {isSelected && <Box sx={tabStyles.border} />}
      </Box>
    </Button>
  );
};

export default GenericTab;
