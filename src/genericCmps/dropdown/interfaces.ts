import { MenuPosition } from "../../enums/MenuPositionEnum";

export interface DropdownItem {
  label: string;
  id: number;
  icon?: React.ReactNode;
  attack?: number;
}

export interface GenericDropdownProps {
  options: DropdownItem[];
  label?: string;
  withSearch?: boolean;
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
  menuPosition?: MenuPosition;
}
