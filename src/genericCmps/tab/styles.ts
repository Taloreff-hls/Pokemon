export const tabStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "38px",
    padding: "4px 8px",
    borderRadius: "4px",
    color: "#000",
    textTransform: "capitalize",
    fontFamily: "Mulish",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "22px",
  },
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid transparent",
    paddingBottom: "2px",
  },
  states: {
    default: {},
    hover: {
      cursor: "pointer",
      backgroundColor: "#EBEFF6",
    },
    pressed: {
      borderBottom: "2px solid #000",
    },
  },
  icon: {
    marginRight: "4px",
  },
};
