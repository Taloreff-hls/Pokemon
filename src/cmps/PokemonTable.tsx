import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import {
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableRow,
  StyledTableCell,
  StyledTablePagination,
  EmptyPokemons,
  avatarStyles,
} from "../styles/StyledTable";
import PokemonModal from "./PokemonModal";
import { Pokemon } from "../interfaces/Pokemon";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, TableCell } from "@mui/material";
import emptyPokemons from "../assets/imgs/no_pokemon.png";
import typography from "../assets/constants/typography";
import fonts from "../assets/constants/fonts";
import colors from "../assets/constants/colors";
import { columns } from "../assets/constants/tableColumns";

interface PokemonTableProps {
  pokemons: Pokemon[];
}

const PokemonTable = ({ pokemons }: PokemonTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

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

  const handleRowClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
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
            {pokemons.length > 0 ? (
              pokemons
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pokemon) => (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={pokemon.id}
                    onClick={() => handleRowClick(pokemon)}
                  >
                    <StyledTableCell>
                      <Avatar
                        src={pokemon.image.hires}
                        sx={avatarStyles}
                        alt={pokemon.name.english}
                      />
                      {pokemon.name.english}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        ...typography.body,
                        fontFamily: fonts.mulish,
                        color: colors.neutrals[300],
                      }}
                    >{`#${pokemon.id.toString().padStart(4, "0")}`}</StyledTableCell>
                    <StyledTableCell>{pokemon.description}</StyledTableCell>
                    <StyledTableCell>
                      {pokemon.base?.Attack ?? "N/A"} Power
                    </StyledTableCell>
                    <StyledTableCell>
                      {pokemon.base?.HP ?? "N/A"} HP
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <TableCell
                  colSpan={columns.length}
                  style={{
                    textAlign: "center",
                    height: "433px",
                  }}
                >
                  <EmptyPokemons>
                    <img src={emptyPokemons} alt="no pokemons" />
                    No Pokemons found.
                  </EmptyPokemons>
                </TableCell>
              </StyledTableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <StyledTablePagination
                rowsPerPageOptions={[10, 25, 100]}
                count={pokemons.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                SelectProps={{
                  IconComponent: KeyboardArrowDownIcon,
                }}
                backIconButtonProps={{ children: <ChevronLeftIcon /> }}
                nextIconButtonProps={{ children: <ChevronRightIcon /> }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </StyledTableContainer>
      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </Paper>
  );
};

export default PokemonTable;
