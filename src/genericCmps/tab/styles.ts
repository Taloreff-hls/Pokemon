import colors from "../../assets/constants/colors";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";
import { SPACING } from "../../assets/constants/spacings";
import { WIDTHS, HEIGHTS } from "../../assets/constants/dimensions";
import { ALIGNMENTS, JUSTIFY_CONTENT } from "../../assets/constants/flex";

export const tabStyles = {
  container: {
    display: "flex",
    justifyContent: JUSTIFY_CONTENT.center,
    alignItems: ALIGNMENTS.center,
    height: HEIGHTS.medium,
    padding: paddings.tab.small,
    borderRadius: SPACING[1],
    color: colors.greys.black,
    textTransform: "capitalize",
    ...typography.body,
    "&:hover": {
      backgroundColor: colors.neutrals[100],
    },
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: ALIGNMENTS.center,
    width: WIDTHS.fullWidth,
  },
  base: {
    display: "flex",
    justifyContent: JUSTIFY_CONTENT.center,
    alignItems: ALIGNMENTS.center,
    paddingBottom: "2px",
  },
  border: {
    width: WIDTHS.extended,
    borderBottom: `2px solid ${colors.greys.black}`,
  },
  icon: {
    marginRight: `${SPACING[2]}`,
  },
};
