import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableRow,
  StyledTableCell,
  StyledTablePagination,
  EmptyPokemons,
} from "../styles/StyledTable";
import PokemonModal from "./PokemonModal";
import { Pokemon } from "../interfaces/Pokemon";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar } from "@mui/material";
import typography from "../assets/constants/typography";
import fonts from "../assets/constants/fonts";
import colors from "../assets/constants/colors";

const columns = [
  { id: "name", label: "Pokemon name", width: "21%" },
  { id: "id", label: "ID", width: "20%" },
  { id: "description", label: "Description", width: "47%" },
  { id: "powerLevel", label: "Power level", width: "6%" },
  { id: "hpLevel", label: "HP level", width: "5.5%" },
];

const PokemonTable: React.FC = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/src/data/pokemon.json");
      const pokemonData = await response.json();
      setData(pokemonData);
    };

    fetchData();
  }, []);

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
            {data.length > 0 ? (
              data
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
                        sx={{
                          width: 50,
                          height: 50,
                          padding: 1,
                          marginRight: 2,
                          bgcolor: "rgba(235, 239, 246, 0.6)",
                        }}
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
                      {pokemon.base.Attack} Power
                    </StyledTableCell>
                    <StyledTableCell>{pokemon.base.HP} HP</StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell
                  colSpan={columns.length}
                  style={{
                    textAlign: "center",
                    height: "433px",
                  }}
                >
                  <EmptyPokemons>No Pokemons found.</EmptyPokemons>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <StyledTablePagination
        rowsPerPageOptions={[10, 25, 100]}
        count={data.length}
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
