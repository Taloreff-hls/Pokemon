export interface DropdownItem {
  label: string;
  icon?: React.ReactNode;
  detail?: string;
}

export interface GenericDropdownProps {
  options: DropdownItem[];
  label: string;
  withSearch?: boolean;
  onSelect: (item: string) => void;
}
