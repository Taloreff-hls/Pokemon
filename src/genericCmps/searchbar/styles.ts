import colors from "../../assets/constants/colors";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";
import fonts from "../../assets/constants/fonts";
import { SPACING } from "../../assets/constants/spacings";
import { CURSORS, HEIGHTS, WIDTHS } from "../../assets/constants/dimensions";
import { BORDERS } from "../../assets/constants/borders";

export const searchbarStyles = {
  container: {
    position: "relative",
    display: "inline-block",
    width: WIDTHS.fullWidth,
    ...typography.body,
    fontFamily: fonts.roboto,
  },
  base: {
    borderRadius: `${SPACING[2]}`,
    height: HEIGHTS.medium,
    padding: paddings.input.search,
    width: WIDTHS.fullWidth,
    boxSizing: "border-box",
    outline: "none",
    backgroundColor: colors.neutrals.transparent,
    border: BORDERS.disabled,
    color: colors.greys[100],

    "&:hover": {
      border: BORDERS.lightGrey,
      color: colors.greys[300],
      cursor: CURSORS.pointer,
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
      cursor: CURSORS.disabled,
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
    cursor: CURSORS.pointer,
    color: colors.greys[200],
    height: HEIGHTS.xsmall,
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
