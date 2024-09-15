import { ButtonSizeEnum, ButtonTypeEnum } from "../../enums/ButtonEnum";

export interface GenericButtonProps {
  type: ButtonTypeEnum;
  size: ButtonSizeEnum;
  label: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  margin?: string;
  marginTop?: string;
}
