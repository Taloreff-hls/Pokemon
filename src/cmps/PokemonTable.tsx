import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { CatchingPokemon } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import rows from "../data/mock_pokemon.json";

import {
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableRow,
  StyledTableCell,
  StyledTablePagination,
} from "../styles/StyledTable";

const columns = [
  { id: "name", label: "Pokemon name", width: "21%" },
  { id: "id", label: "ID", width: "20%" },
  { id: "description", label: "Description", width: "47%" },
  { id: "powerLevel", label: "Power level", width: "6%" },
  { id: "hpLevel", label: "HP level", width: "5.5%" },
];

export default function PokemonTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <StyledTableContainer>
        <Table stickyHeader aria-label="pokemon table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableHeadCell
                  key={column.id}
                  style={{
                    width: column.width,
                  }}
                >
                  {column.label}
                </StyledTableHeadCell>
              ))}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                  >
                    {columns.map((column) => {
                      const value = row[column.id as keyof typeof row];
                      return (
                        <StyledTableCell key={column.id}>
                          {column.id === "name" && (
                            <>
                              <CatchingPokemon
                                style={{
                                  marginRight: "16px",
                                  width: "54px",
                                  height: "54px",
                                }}
                              />
                              {value}
                            </>
                          )}
                          {column.id !== "name" && value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <StyledTablePagination
        rowsPerPageOptions={[10, 25, 100]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        slotProps={{
          select: {
            IconComponent: KeyboardArrowDownIcon,
          },
          actions: {
            previousButtonIcon: <ChevronLeftIcon />,
            nextButtonIcon: <ChevronRightIcon />,
          },
        }}
      />
    </Paper>
  );
}
