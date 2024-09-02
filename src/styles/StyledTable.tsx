import { styled } from "@mui/material/styles";
import {
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
} from "@mui/material";
import colors from "../assets/constants/colors";
import { BORDERS } from "../assets/constants/borders";
import typography from "../assets/constants/typography";
import fonts from "../assets/constants/fonts";
import { SPACING } from "../assets/constants/spacings";

export const StyledTableContainer = styled(TableContainer)(() => ({
  width: "100%",
  maxHeight: 884,
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
}));

export const StyledTableHead = styled(TableHead)(() => ({
  width: "100%",
  height: SPACING[10],
  border: BORDERS.neutral,
}));

export const StyledTableHeadCell = styled(TableCell)(() => ({
  ":first-of-type": {
    paddingLeft: "85px",
  },
  backgroundColor: colors.primary[50],
  ...typography.body,
  fontFamily: fonts.mulish,
  fontWeight: 700,
}));

export const StyledTableRow = styled(TableRow)(() => ({
  borderBottomRightRadius: "1px",
  border: BORDERS.neutral,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: colors.neutrals[100],
  },
}));

export const StyledTableCell = styled(TableCell)(() => ({
  ":first-of-type": {
    display: "flex",
    alignItems: "center",
    ...typography["subheading-lg"],
    color: colors.greys[600],
    paddingLeft: SPACING[6],
  },
  "&:nth-child(4), &:nth-child(5)": {
    paddingRight: SPACING[6],
  },
  padding: `${SPACING[6]} ${SPACING[9]} ${SPACING[6]} 0`,
  ...typography.body,
  color: colors.neutrals[300],
  fontFamily: fonts.mulish,
  fontWeight: 400,
}));

export const StyledTablePagination = styled(TablePagination)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `0 ${SPACING[6]}`,

  ".MuiTablePagination-toolbar": {
    width: "100%",
  },
  ".MuiTablePagination-spacer": {
    flex: "0 1 auto",
  },
  ".MuiInputBase-input": {
    display: "flex",
    alignItems: "center",
    ...typography.small,
    fontFamily: fonts.roboto,
    color: colors.greys[100],
  },
  ".MuiTablePagination-selectLabel": {
    ...typography.small,
    fontFamily: fonts.roboto,
    color: colors.greys[100],
    marginRight: SPACING[2],
  },
  ".MuiTablePagination-displayedRows": {
    ...typography.small,
    fontFamily: fonts.roboto,
    color: colors.greys[100],
    marginLeft: "auto",
    marginRight: SPACING[6],
  },
  ".MuiTablePagination-actions": {
    display: "flex",
    alignItems: "center",
    marginRight: SPACING[4],
  },

  ".MuiTablePagination-selectIcon": {
    ...typography["heading-md"],
  },

  ".MuiIconButton-sizeMedium": {
    width: SPACING[7],
    height: SPACING[7],
    color: colors.greys[100],

    "&:first-child": {
      marginRight: SPACING[7],
    },
  },

  ".css-20bmp1-MuiSvgIcon-root": {
    ...typography["heading-lg"],
  },
}));
