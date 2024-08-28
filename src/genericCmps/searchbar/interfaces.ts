export type SearchbarState =
  | "default"
  | "hover"
  | "pressed"
  | "afterSearch"
  | "disabled";

export interface GenericSearchbarProps {
  state: SearchbarState;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}
