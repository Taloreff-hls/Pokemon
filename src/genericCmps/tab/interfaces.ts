import { SvgIconComponent } from "@mui/icons-material";

export interface GenericTabProps {
  label: string;
  icon: SvgIconComponent;
  onClick: () => void;
  isSelected: boolean;
}
