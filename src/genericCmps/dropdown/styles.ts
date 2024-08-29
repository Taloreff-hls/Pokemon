import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";

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
    border: `1px solid ${colors.neutrals.n200}`,
    borderRadius: "8px",
    cursor: "pointer",
    width: "fit-content",
    height: "38px",
    backgroundColor: "transparent",
    ...typography.bodyRegular,
    fontFamily: fonts.roboto,
  },
  menu: {
    padding: paddings.dropdown.small,
    marginTop: "10px",
    background: colors.neutrals.white,
    borderRadius: "4px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  },
  list: {
    maxHeight: "264px",
    overflowY: "auto",
  },
  item: {
    ...typography.bodyRegular,
    padding: paddings.dropdown.small,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colors.neutrals.n100,
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
    marginRight: "8px",
    backgroundColor: "#EBEFF6BA",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
  },
  attack: {
    ...typography.captionBold,
    display: "flex",
    marginLeft: "auto",
    color: colors.neutrals.n400,
  },
  px: {
    ...typography.xSmallRegular,
  },
};
