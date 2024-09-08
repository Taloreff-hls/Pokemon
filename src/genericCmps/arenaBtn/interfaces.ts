import typography from "../../assets/constants/typography";

export type TypographyKeys = keyof typeof typography;

export interface ArenaButtonProps {
  padding?: string;
  background?: string;
  fontWeight?: number;
  color?: string;
  type?: TypographyKeys;
  width?: string;
  height?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
