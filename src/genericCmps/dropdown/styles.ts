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
    right: SPACING[1],
    padding: paddings.dropdown.small,
    marginTop: `${SPACING[4]}`,
    background: colors.neutrals.white,
    borderRadius: `${SPACING[1]}`,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
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
    width: "25px",
    height: "25px",
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
