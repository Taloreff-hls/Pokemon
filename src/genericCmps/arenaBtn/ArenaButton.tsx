import React from "react";
import { ArenaButtonProps } from "./interfaces";
import { StyledArenaButton } from "./styles";

const ArenaButton = ({
  padding,
  background,
  fontWeight,
  color,
  type,
  width,
  height,
  children,
  disabled,
  onClick,
}: ArenaButtonProps) => {
  return (
    <StyledArenaButton
      padding={padding}
      background={background}
      fontWeight={fontWeight}
      color={color}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledArenaButton>
  );
};

export default ArenaButton;
