import { Button, Box } from "@mui/material";
import { GenericButtonProps } from "./interfaces";
import { buttonStyles } from "./styles";

const GenericButton = ({
  type,
  size,
  label,
  fontSize,
  fontWeight,
  onClick,
  disabled = false,
  selected = false,
  margin,
  marginTop,
}: GenericButtonProps) => {
  return (
    <Button
      sx={{
        ...buttonStyles.base,
        ...buttonStyles.sizes[size],
        ...buttonStyles.types[type],
        ...(fontSize && { fontSize }),
        ...(fontWeight && { fontWeight }),
        ...(selected && buttonStyles.types[type]["&:hover"]),
        ...(disabled && buttonStyles.types[type].disabled),
        ...(margin && { margin }),
        ...(marginTop && { marginTop }),
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <Box>{label}</Box>
    </Button>
  );
};

export default GenericButton;
