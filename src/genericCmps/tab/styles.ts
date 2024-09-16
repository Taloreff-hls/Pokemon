import colors from "../../assets/constants/colors";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";
import { SPACING } from "../../assets/constants/spacings";

export const tabStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "38px",
    padding: paddings.tab.small,
    borderRadius: SPACING[1],
    color: colors.greys.black,
    textTransform: "capitalize",
    ...typography.body,
    "&:hover": {
      backgroundColor: colors.primary[50],
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
    paddingBottom: SPACING[1],
  },
  label: {
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
  },
  border: {
    width: "130%",
    borderBottom: `2px solid ${colors.greys.black}`,
    borderWidth: SPACING[0],
  },
  icon: {
    width: SPACING[7],
    height: SPACING[7],
    marginRight: `${SPACING[2]}`,
  },
};
