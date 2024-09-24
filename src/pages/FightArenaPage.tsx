import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { pokemonService } from "../services/pokemon.service";
import FightArena from "../cmps/FightArena";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { FightLayoutContainer } from "../styles/FightLayoutContainer";
import Typography from "../styles/Typography";
import { SPACING } from "../assets/constants/spacings";
import { TypographyType } from "../enums/TypographyEnum";
import { MenuPosition } from "../enums/MenuPositionEnum";
import { getRandomOpponent } from "../services/util.service";
import { Pokemon } from "../interfaces/Pokemon";
import colors from "../assets/constants/colors";
import { ContentLayout } from "../styles/LayoutContainer";

// TODO: implement this page with react query, once to get the user pokemons and once to get a random pokemon through the server

const FightArenaPage = () => {
  const { data: allPokemons } = useQuery(
    "pokemonData",
    pokemonService.getPokemons
  );

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon | null>(null);

  const userPokemons = useMemo(
    () =>
      allPokemons?.filter((pokemon: Pokemon) => pokemon.belongsToUser) || [],
    [allPokemons]
  );

  useEffect(() => {
    if (userPokemons.length > 0) {
      setSelectedPokemon(userPokemons[0]);
    }
  }, [userPokemons]);

  useEffect(() => {
    if (allPokemons && userPokemons.length > 0) {
      const nonUserPokemons = allPokemons.filter(
        (pokemon: Pokemon) =>
          !userPokemons.some(
            (userPokemon: Pokemon) => userPokemon.id === pokemon.id
          )
      );
      setOpponentPokemon(getRandomOpponent(nonUserPokemons));
    }
  }, [allPokemons, userPokemons]);

  const handleSelectPokemon = (selectedItem: DropdownItem) => {
    const pokemon = userPokemons.find(
      (poke: Pokemon) => poke.id === selectedItem.id
    );
    if (pokemon) {
      setSelectedPokemon(pokemon);
    }
  };

  const dropdownOptions: DropdownItem[] = useMemo(
    () =>
      userPokemons.map((pokemon: Pokemon) => ({
        label: pokemon.name,
        icon: (
          <img
            src={pokemon.image}
            alt={pokemon.name}
            width={SPACING[7]}
            height={SPACING[7]}
          />
        ),
        attack: pokemon.attack,
        id: pokemon.id,
      })),
    [userPokemons]
  );

  const renderHeader = () => (
    <Typography
      fontWeight={700}
      type={TypographyType.HeadingXxxl}
      color={colors.neutrals[400]}
      aligntext="center"
    >
      Fighting arena
    </Typography>
  );

  const renderSubHeader = () => (
    <Typography
      fontWeight={400}
      type={TypographyType.Medium}
      color={colors.neutrals[500]}
      aligntext="center"
      marginRight={SPACING[6]}
    >
      Press fight button until your or your enemy's power ends
    </Typography>
  );

  return (
    <FightLayoutContainer>
      <ContentLayout>
        {renderHeader()}
        {renderSubHeader()}
        <GenericDropdown
          label="Choose Pokemon"
          options={dropdownOptions}
          onSelect={handleSelectPokemon}
          withSearch
          menuPosition={MenuPosition.Left}
        />
        {selectedPokemon && opponentPokemon && (
          <FightArena
            selectedPokemon={selectedPokemon}
            opponentPokemon={opponentPokemon}
          />
        )}
      </ContentLayout>
    </FightLayoutContainer>
  );
};

export default FightArenaPage;
