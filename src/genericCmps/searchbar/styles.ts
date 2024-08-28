export const searchbarStyles = {
  container: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    fontSize: "14px",
  },
  base: {
    borderRadius: "8px",
    padding: "8px 80px 8px 40px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
  },
  icon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: "#71787F",
  },
  closeIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#0B0C0D",
    height: "20px",
  },
  states: {
    default: {
      border: "1px solid #A8AEB5",
      color: "#71787F",
    },
    hover: {
      border: "1px solid #71787F",
      color: "#44484C",
      cursor: "pointer",
    },
    pressed: {
      border: "1px solid #2D3033",
      color: "#2D3033",
    },
    filled: {
      border: "1px solid #2D3033",
      color: "#2D3033",
    },
    afterSearch: {
      border: "1px solid #929AA3",
      color: "#0B0C0D",
      padding: "8px 16px 8px 12px",
    },
    disabled: {
      border: "1px solid #929AA3",
      color: "#F2F5F7",
      padding: "8px 16px 8px 12px",
    },
  },
};
