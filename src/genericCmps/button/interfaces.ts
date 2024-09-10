export type ButtonSize = "small" | "medium" | "large";
export type ButtonType =
  | "primary"
  | "secondary"
  | "secondary-grey"
  | "tertiary"
  | "tertiary-grey";

export interface GenericButtonProps {
  type: ButtonType;
  size: ButtonSize;
  label: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  margin?: string;
}
