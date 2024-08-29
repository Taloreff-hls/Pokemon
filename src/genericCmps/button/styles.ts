import colors from "../../assets/constants/colors";
import typography from "../../assets/constants/typography";
import paddings from "../../assets/constants/paddings";

export const buttonStyles = {
  base: {
    borderRadius: "4px",
    fontWeight: typography.bodyRegular.fontWeight,
  },
  sizes: {
    small: {
      padding: paddings.button.small,
      fontSize: typography.bodyRegular.fontSize,
    },
    medium: {
      padding: paddings.button.medium,
      fontSize: typography.buttonMediumBig.fontSize,
    },
    large: {
      padding: paddings.button.large,
      fontSize: typography.buttonMediumBig.fontSize,
    },
  },
  types: {
    primary: {
      backgroundColor: colors.primary.p300,
      color: colors.neutrals.white,
      "&:hover": {
        backgroundColor: colors.primary.p400,
        color: colors.neutrals.white,
      },
      "&:active": {
        backgroundColor: colors.primary.p500,
        color: colors.neutrals.white,
      },
      disabled: {
        backgroundColor: colors.neutrals.n100,
        color: colors.neutrals.n200,
      },
    },
    secondary: {
      backgroundColor: "transparent",
      color: colors.primary.p300,
      border: `1px solid ${colors.primary.p300}`,
      "&:hover": {
        backgroundColor: colors.primary.p50,
        color: colors.primary.p300,
        border: `1px solid ${colors.primary.p300}`,
      },
      "&:active": {
        backgroundColor: colors.primary.p100,
        color: colors.primary.p300,
        border: `1px solid ${colors.primary.p300}`,
      },
      disabled: {
        backgroundColor: "transparent",
        color: colors.neutrals.n200,
        border: `1px solid ${colors.neutrals.n200}`,
      },
    },
    "secondary-grey": {
      backgroundColor: "transparent",
      color: colors.neutrals.n400,
      border: `1px solid ${colors.neutrals.n400}`,
      "&:hover": {
        backgroundColor: colors.neutrals.n100,
        color: colors.neutrals.n300,
        border: `1px solid ${colors.neutrals.n400}`,
      },
      "&:active": {
        backgroundColor: colors.neutrals.n100,
        color: colors.neutrals.n400,
        border: `1px solid ${colors.neutrals.n400}`,
      },
      disabled: {
        backgroundColor: "transparent",
        color: colors.neutrals.n200,
        border: `1px solid ${colors.neutrals.n200}`,
      },
    },
    tertiary: {
      backgroundColor: "transparent",
      color: colors.primary.p300,
      "&:hover": {
        backgroundColor: colors.primary.p50,
        color: colors.primary.p300,
      },
      "&:active": {
        backgroundColor: colors.primary.p100,
        color: colors.primary.p300,
      },
      disabled: {
        backgroundColor: "transparent",
        color: colors.neutrals.n200,
      },
    },
    "tertiary-grey": {
      backgroundColor: "transparent",
      color: colors.neutrals.n400,
      "&:hover": {
        backgroundColor: colors.neutrals.n100,
        color: colors.neutrals.n300,
      },
      "&:active": {
        backgroundColor: colors.neutrals.n100,
        color: colors.neutrals.n400,
      },
      disabled: {
        backgroundColor: "transparent",
        color: colors.neutrals.n200,
      },
    },
  },
};
