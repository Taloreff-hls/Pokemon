export const dropdownStyles = {
  container: {
    position: "relative",
    width: "200px",
  },
  trigger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 12px",
    border: "1px solid #A8AEB5",
    borderRadius: "8px",
    cursor: "pointer",
    width: "110px",
    height: "38px",
    backgroundColor: "transparent",
  },
  menu: {
    padding: "8px",
    marginTop: "10px",
    background: "#fff",
    borderRadius: "4px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  },
  list: {
    maxHeight: "200px",
    overflowY: "auto",
  },
  item: {
    fontFamily: "Mulish",
    padding: "8px",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F2F5F7",
    },
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
    display: "flex",
    marginLeft: "auto",
    color: "#44484C",
    fontWeight: "700",
    fontSize: "12px",
  },
  px: {
    fontWeight: "400",
    fontSize: "11px",
  },
};
