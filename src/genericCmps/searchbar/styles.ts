import colors from "../../assets/constants/colors";
import paddings from "../../assets/constants/paddings";
import typography from "../../assets/constants/typography";
import fonts from "../../assets/constants/fonts";

export const searchbarStyles = {
  container: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    ...typography.bodyRegular,
    fontFamily: fonts.roboto,
  },
  base: {
    borderRadius: "8px",
    height: "38px",
    padding: paddings.input.search,
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    border: `1px solid ${colors.neutrals.n200}`,
    color: colors.greys.g100,

    "&:hover": {
      border: `1px solid ${colors.greys.g100}`,
      color: colors.greys.g300,
      cursor: "pointer",
    },

    "&:focus": {
      border: `1px solid ${colors.neutrals.n500}`,
      color: colors.neutrals.n500,
    },

    "&:active": {
      border: `1px solid ${colors.neutrals.n500}`,
      color: colors.neutrals.n500,
    },

    "&:disabled": {
      border: `1px solid ${colors.greys.g400}`,
      color: colors.neutrals.n100,
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
    color: colors.greys.g100,
  },
  closeIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: colors.greys.g200,
    height: "20px",
  },
  filled: {
    border: `1px solid ${colors.neutrals.n500}`,
    color: colors.neutrals.n500,
  },
  disabled: {
    border: `1px solid ${colors.greys.g400}`,
    color: colors.neutrals.n100,
    padding: paddings.input.after,
  },
};
