export interface GenericSearchbarProps {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  width?: number;
}
