import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";
import { SPACING } from "../../assets/constants/spacings";
import { WIDTHS, HEIGHTS, CURSORS } from "../../assets/constants/dimensions";
import { ALIGNMENTS, JUSTIFY_CONTENT } from "../../assets/constants/flex";

export const dropdownStyles = {
  container: {
    position: "relative",
    width: WIDTHS.fitContent,
  },
  trigger: {
    display: "flex",
    alignItems: ALIGNMENTS.center,
    justifyContent: JUSTIFY_CONTENT.between,
    padding: paddings.dropdown.medium,
    border: `1px solid ${colors.neutrals[200]}`,
    borderRadius: `${SPACING[2]}`,
    cursor: CURSORS.pointer,
    width: WIDTHS.fitContent,
    height: HEIGHTS.medium,
    backgroundColor: colors.neutrals.transparent,
    ...typography.body,
    fontFamily: fonts.roboto,
  },
  menu: {
    padding: paddings.dropdown.small,
    marginTop: `${SPACING[4]}`,
    background: colors.neutrals.white,
    borderRadius: `${SPACING[1]}`,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  },
  list: {
    maxHeight: HEIGHTS.max,
    overflowY: "auto",
  },
  item: {
    fontFamily: fonts.mulish,
    ...typography.body,
    padding: paddings.dropdown.small,
    display: "flex",
    alignItems: ALIGNMENTS.center,
    cursor: CURSORS.pointer,
    "&:hover": {
      backgroundColor: colors.neutrals[100],
    },
    minWidth: WIDTHS.small,
  },
  leftItems: {
    display: "flex",
    justifyContent: JUSTIFY_CONTENT.center,
    alignItems: ALIGNMENTS.center,
  },
  icon: {
    display: "flex",
    alignItems: ALIGNMENTS.center,
    justifyContent: JUSTIFY_CONTENT.center,
    marginRight: `${SPACING[2]}`,
    backgroundColor: colors.greys[500],
    width: HEIGHTS.small,
    height: HEIGHTS.small,
    borderRadius: "50%",
  },
  attack: {
    ...typography["caption"],
    fontWeight: 700,
    display: "flex",
    marginLeft: "auto",
    color: colors.neutrals[400],
  },
  px: {
    ...typography["x-small"],
    fontWeight: 400,
  },
};
