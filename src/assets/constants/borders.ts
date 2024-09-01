import colors from "./colors";
import { SPACING } from "./spacings";

export const BORDERS = {
  primary: `1px solid ${colors.primary[300]}`,
  secondary: `1px solid ${colors.primary[200]}`,
  grey: `1px solid ${colors.neutrals[400]}`,
  lightGrey: `1px solid ${colors.greys[100]}`,
  darkGrey: `1px solid ${colors.neutrals[500]}`,
  disabled: `1px solid ${colors.neutrals[200]}`,
  bottom: `2px solid ${colors.greys.black}`,

  borderRadiusSmall: `${SPACING[1]}`,
  borderRadiusMedium: `${SPACING[2]}`,
  borderRadiusLarge: `${SPACING[3]}`,
};
