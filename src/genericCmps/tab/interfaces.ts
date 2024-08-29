import { SvgIconComponent } from "@mui/icons-material";

export type TabState = "default" | "hover" | "pressed";

export interface GenericTabProps {
  state: TabState;
  label: string;
  icon: SvgIconComponent;
  onClick: () => void;
}
