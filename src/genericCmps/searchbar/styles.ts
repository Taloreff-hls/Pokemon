import colors from "../../assets/constants/colors";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";
import fonts from "../../assets/constants/fonts";
import { SPACING } from "../../assets/constants/spacings";

export const searchbarStyles = {
  container: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    ...typography.body,
    fontFamily: fonts.roboto,
  },
  base: {
    borderRadius: `${SPACING[2]}`,
    height: "38px",
    padding: paddings.input.search,
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    backgroundColor: colors.neutrals.transparent,
    border: `1px solid ${colors.neutrals[200]}`,
    color: colors.greys[100],

    "&:hover": {
      border: `1px solid ${colors.greys[100]}`,
      color: colors.greys[300],
      cursor: "pointer",
    },

    "&:focus": {
      border: `1px solid ${colors.neutrals[500]}`,
      color: colors.neutrals[500],
    },

    "&:active": {
      border: `1px solid ${colors.neutrals[500]}`,
      color: colors.neutrals[500],
    },

    "&:disabled": {
      border: `1px solid ${colors.neutrals[200]}`,
      color: colors.neutrals[100],
      padding: paddings.input.after,
      cursor: "not-allowed",
    },
  },
  icon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: colors.greys[100],
  },
  closeIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: colors.greys[200],
    height: "20px",
  },
  filled: {
    border: `1px solid ${colors.neutrals[500]}`,
    color: colors.neutrals[500],
  },
  disabled: {
    border: `1px solid ${colors.neutrals[200]}`,
    color: colors.neutrals[100],
    padding: paddings.input.after,
  },
};
