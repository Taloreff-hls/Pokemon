import styled from "styled-components";
import {
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
} from "@mui/material";
import colors from "../assets/constants/colors";
import typography from "../assets/constants/typography";
import fonts from "../assets/constants/fonts";
import { SPACING } from "../assets/constants/spacings";

export const StyledTableContainer = styled(TableContainer)`
  && {
    width: 100%;
    max-height: 884px;
    border-top-left-radius: ${SPACING[1]};
    border-top-right-radius: ${SPACING[1]};
  }
`;

export const StyledTableHead = styled(TableHead)`
  && {
    width: 100%;
    height: ${SPACING[10]};
    border: 1px solid ${colors.neutrals[100]},
    background-color: ${colors.primary[50]};
  }
`;

export const StyledTableHeadCell = styled(TableCell)`
  && {
    background-color: ${colors.primary[50]};
    ${typography.body};
    font-family: ${fonts.mulish};
    font-weight: 700;
    padding-left: 0;
    &:first-of-type {
      padding-left: 85px;
    }
  }
`;

export const StyledTableRow = styled(TableRow)`
  && {
    border-bottom-right-radius: 1px;
    border: 1px solid ${colors.neutrals[100]};
    cursor: pointer;
    &:hover {
      background-color: ${colors.neutrals[100]};
    }
  }
`;

export const StyledTableCell = styled(TableCell)`
  && {
    &:first-of-type {
      display: flex;
      align-items: center;
      ${typography["subheading-lg"]};
      color: ${colors.greys[600]};
      padding-left: ${SPACING[6]};
    }
    &:nth-child(4),
    &:nth-child(5) {
      padding-right: ${SPACING[6]};
    }
    height: 72px;
    padding: ${SPACING[6]} ${SPACING[9]} ${SPACING[6]} 0;
    padding: 1px ${SPACING[9]} 1px 0; // Set vertical padding to 0 to maintain the 72px height
    ${typography.body};
    color: ${colors.neutrals[300]};
    font-family: ${fonts.mulish};
    font-weight: 400;
  }
`;

export const EmptyPokemons = styled.span`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${typography["subheading-lg"]};
    color: ${colors.greys[700]};
    font-family: ${fonts.mulish};
    font-weight: 400;

    & img {
      margin-bottom: ${SPACING[6]};
    }
  }
`;

export const StyledTablePagination = styled(TablePagination)`
  && {
    justify-content: space-between;
    align-items: center;
    padding: 0 ${SPACING[6]};

    .MuiTablePagination-spacer {
      flex: 0 1 auto;
    }
    .MuiInputBase-input {
      display: flex;
      align-items: center;
      ${typography.small};
      font-family: ${fonts.roboto};
      color: ${colors.greys[100]};
    }
    .MuiTablePagination-selectLabel {
      ${typography.small};
      font-family: ${fonts.roboto};
      color: ${colors.greys[100]};
      margin-right: ${SPACING[2]};
    }
    .MuiTablePagination-displayedRows {
      ${typography.small};
      font-family: ${fonts.roboto};
      color: ${colors.greys[100]};
      margin-left: auto;
      margin-right: ${SPACING[6]};
    }
    .MuiTablePagination-actions {
      display: flex;
      align-items: center;
      margin-right: ${SPACING[4]};
    }
    .MuiTablePagination-selectIcon {
      ${typography["heading-md"]};
    }
    .MuiIconButton-sizeMedium {
      width: ${SPACING[7]};
      height: ${SPACING[7]};
      color: ${colors.greys[100]};

      &:first-child {
        margin-right: ${SPACING[7]};
      }
    }
    .css-20bmp1-MuiSvgIcon-root {
      ${typography["heading-lg"]};
    }
  }
`;

export const avatarStyles = {
  width: 50,
  height: 50,
  padding: 1,
  marginRight: 2,
  bgcolor: colors.neutrals[600],
};
