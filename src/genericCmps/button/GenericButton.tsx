import Button from "@mui/material/Button";
import { buttonStyles } from "./styles";
import { GenericButtonProps } from "./interfaces";

const GenericButton = ({
  variant,
  size,
  label,
  onClick,
  disabled = false,
}: Omit<GenericButtonProps, "state">) => {
  const sizeStyle = buttonStyles.sizes[size] || {};
  const variantStyle = buttonStyles.variants[variant] || {};
  const inputStyles = {
    ...buttonStyles.base,
    ...sizeStyle,
    ...variantStyle.default,
    "&:hover": disabled ? {} : variantStyle.hover || {},
    "&:active": disabled ? {} : variantStyle.pressed || {},
    "&:disabled": variantStyle.disabled || {},
  };

  return (
    <Button sx={inputStyles} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

export default GenericButton;
