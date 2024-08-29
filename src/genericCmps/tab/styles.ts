import colors from "../../assets/constants/colors";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";

export const tabStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "38px",
    padding: paddings.tab.small,
    borderRadius: "4px",
    color: colors.greys.black,
    textTransform: "capitalize",
    ...typography.bodyRegular,
    "&:hover": {
      backgroundColor: colors.neutrals.n100,
    },
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2px",
  },
  border: {
    width: "110%",
    borderBottom: `2px solid ${colors.greys.black}`,
  },
  icon: {
    marginRight: "4px",
  },
};
