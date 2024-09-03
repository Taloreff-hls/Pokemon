import colors from "../../assets/constants/colors";
import typography from "../../assets/constants/typography";
import paddings from "../../assets/constants/paddings";
import { SPACING } from "../../assets/constants/spacings";

export const buttonStyles = {
  base: {
    borderRadius: `${SPACING[1]}`,
    textTransform: "none",
  },
  sizes: {
    small: {
      padding: paddings.button.small,
      fontSize: typography.body.fontSize,
      lineHeight: typography.body.lineHeight,
    },
    medium: {
      padding: paddings.button.medium,
      fontSize: typography["heading-md"].fontSize,
      lineHeight: typography["heading-md"].lineHeight,
    },
    large: {
      padding: paddings.button.large,
      fontSize: typography["heading-md"].fontSize,
      lineHeight: typography["heading-md"].lineHeight,
    },
  },
  types: {
    primary: {
      backgroundColor: colors.primary[300],
      color: colors.neutrals.white,
      "&:hover": {
        backgroundColor: colors.primary[400],
        color: colors.neutrals.white,
      },
      "&:active": {
        backgroundColor: colors.primary[500],
        color: colors.neutrals.white,
      },
      disabled: {
        backgroundColor: colors.neutrals[100],
        color: colors.neutrals[200],
      },
    },
    secondary: {
      backgroundColor: colors.neutrals.transparent,
      color: colors.primary[300],
      border: `1px solid ${colors.primary[300]}`,
      "&:hover": {
        backgroundColor: colors.primary[50],
        color: colors.primary[300],
        border: `1px solid ${colors.primary[300]}`,
      },
      "&:active": {
        backgroundColor: colors.primary[100],
        color: colors.primary[300],
        border: `1px solid ${colors.primary[300]}`,
      },
      disabled: {
        backgroundColor: colors.neutrals.transparent,
        color: colors.neutrals[200],
        border: `1px solid ${colors.neutrals[200]}`,
      },
    },
    "secondary-grey": {
      backgroundColor: colors.neutrals.transparent,
      color: colors.neutrals[400],
      border: `1px solid ${colors.neutrals[400]}`,
      "&:hover": {
        backgroundColor: colors.neutrals[100],
        color: colors.neutrals[300],
        border: `1px solid ${colors.neutrals[400]}`,
      },
      "&:active": {
        backgroundColor: colors.neutrals[100],
        color: colors.neutrals[400],
        border: `1px solid ${colors.neutrals[400]}`,
      },
      disabled: {
        backgroundColor: colors.neutrals.transparent,
        color: colors.neutrals[200],
        border: `1px solid ${colors.neutrals[200]}`,
      },
    },
    tertiary: {
      backgroundColor: colors.neutrals.transparent,
      color: colors.primary[300],
      "&:hover": {
        backgroundColor: colors.primary[50],
        color: colors.primary[300],
      },
      "&:active": {
        backgroundColor: colors.primary[100],
        color: colors.primary[300],
      },
      disabled: {
        backgroundColor: colors.neutrals.transparent,
        color: colors.neutrals[200],
      },
    },
    "tertiary-grey": {
      backgroundColor: colors.neutrals.transparent,
      color: colors.neutrals[400],
      "&:hover": {
        backgroundColor: colors.neutrals[100],
        color: colors.neutrals[300],
      },
      "&:active": {
        backgroundColor: colors.neutrals[100],
        color: colors.neutrals[400],
      },
      disabled: {
        backgroundColor: colors.neutrals.transparent,
        color: colors.neutrals[200],
      },
    },
  },
};
