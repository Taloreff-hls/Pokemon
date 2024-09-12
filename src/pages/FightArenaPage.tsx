import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { pokemonService } from "../services/pokemon.service";
import FightArena from "../cmps/FightArena";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { LayoutContainer, ContentLayout } from "../styles/LayoutContainer";
import Typography from "../styles/Typography";
import { SPACING } from "../assets/constants/spacings";
import { TypographyType } from "../enums/TypographyEnum";
import { MenuPosition } from "../enums/MenuPositionEnum";
import { getRandomOpponent } from "../services/util.service";
import { Pokemon } from "../interfaces/Pokemon";
import colors from "../assets/constants/colors";

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
    if (userPokemons.length > 0 && !selectedPokemon) {
      setSelectedPokemon(userPokemons[0]);
    }
  }, [userPokemons, selectedPokemon]);

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
        label: pokemon.name.english,
        icon: (
          <img
            src={pokemon.image.thumbnail}
            alt={pokemon.name.english}
            width={SPACING[7]}
            height={SPACING[7]}
          />
        ),
        attack: pokemon.base.Attack,
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
    <LayoutContainer>
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
    </LayoutContainer>
  );
};

export default FightArenaPage;
