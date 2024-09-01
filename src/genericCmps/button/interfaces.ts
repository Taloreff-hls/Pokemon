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
  onClick: () => void;
  disabled?: boolean;
  selected?: boolean;
}
