import { TypographyType } from "../enums/TypographyEnum";

export interface ButtonStyle {
  label: string;
  bgColor: string;
  weight: number;
  type: TypographyType;
  height: string;
  width: string;
}
