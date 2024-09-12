import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";
import { SPACING } from "../../assets/constants/spacings";

export const dropdownStyles = {
  container: {
    position: "relative",
    width: "fit-content",
  },
  trigger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: paddings.dropdown.medium,
    border: `1px solid ${colors.neutrals[200]}`,
    borderRadius: `${SPACING[2]}`,
    cursor: "pointer",
    width: "fit-content",
    backgroundColor: colors.neutrals.transparent,
    ...typography.body,
    fontFamily: fonts.roboto,
    color: colors.greys[300],
  },
  arrowIcon: {
    marginLeft: SPACING[1],
    width: SPACING[6],
    height: SPACING[6],
  },
  menu: {
    position: "absolute",
    padding: paddings.dropdown.small,
    marginTop: `${SPACING[4]}`,
    background: colors.neutrals.white,
    borderRadius: `${SPACING[1]}`,
    boxShadow: `0px ${SPACING[1]} ${SPACING[1]} 0px ${colors.greys[50]}`,
    zIndex: 10,
  },
  menuPosition: {
    right: SPACING[1],
    left: SPACING[1],
  },
  list: {
    maxHeight: "264px",
    overflowY: "auto",
  },
  item: {
    fontFamily: fonts.mulish,
    ...typography.body,
    padding: paddings.dropdown.small,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colors.neutrals[100],
    },
    minWidth: "206px",
  },
  leftItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: `${SPACING[2]}`,
    backgroundColor: colors.greys[500],
    width: SPACING[7],
    height: SPACING[7],
    borderRadius: "50%",
  },
  attack: {
    ...typography["caption"],
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    color: colors.neutrals[400],
  },
  px: {
    ...typography["x-small"],
    fontWeight: 400,
  },
};
