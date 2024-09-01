import colors from "../../assets/constants/colors";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";
import fonts from "../../assets/constants/fonts";
import { SPACING } from "../../assets/constants/spacings";
import { BORDERS } from "../../assets/constants/borders";

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
    border: BORDERS.disabled,
    color: colors.greys[100],

    "&:hover": {
      border: BORDERS.lightGrey,
      color: colors.greys[300],
      cursor: "pointer",
    },

    "&:focus": {
      border: BORDERS.darkGrey,
      color: colors.neutrals[500],
    },

    "&:active": {
      border: BORDERS.darkGrey,
      color: colors.neutrals[500],
    },

    "&:disabled": {
      border: BORDERS.disabled,
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
    border: BORDERS.darkGrey,
    color: colors.neutrals[500],
  },
  disabled: {
    border: BORDERS.disabled,
    color: colors.neutrals[100],
    padding: paddings.input.after,
  },
};
