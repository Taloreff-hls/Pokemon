import { Button, Box } from "@mui/material";
import { GenericButtonProps } from "./interfaces";
import { buttonStyles } from "./styles";

const GenericButton = ({
  type,
  size,
  label,
  onClick,
  disabled = false,
}: GenericButtonProps) => {
  return (
    <Button
      sx={{
        ...buttonStyles.base,
        ...buttonStyles.sizes[size],
        ...buttonStyles.types[type],
        ...(disabled && buttonStyles.types[type].disabled),
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <Box>{label}</Box>
    </Button>
  );
};

export default GenericButton;
