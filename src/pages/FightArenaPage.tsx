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
import { Pokemon } from "../interfaces/Pokemon";
import colors from "../assets/constants/colors";
import { ContentLayout } from "../styles/LayoutContainer";

const userId = "02fea148-e9dc-4cae-89aa-8db50df0dd48"; // Replace with actual user ID

const FightArenaPage = () => {
  const { data: { pokemons = [] } = {}, isLoading: isLoadingUserPokemons } =
    useQuery(["userPokemons", userId], () =>
      pokemonService.getPokemons(userId)
    );

  const { data: opponentPokemon, isLoading: isLoadingOpponentPokemon } =
    useQuery(["opponentPokemon", userId], () =>
      pokemonService.getRandomPokemon(userId)
    );

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (pokemons.length > 0) {
      setSelectedPokemon(pokemons[0]);
    }
  }, [pokemons]);

  const handleSelectPokemon = (selectedItem: DropdownItem) => {
    const pokemon = pokemons.find(
      (poke: Pokemon) => poke.id === selectedItem.id
    );
    if (pokemon) {
      setSelectedPokemon(pokemon);
    }
  };

  const dropdownOptions: DropdownItem[] = useMemo(
    () =>
      pokemons.map((pokemon: Pokemon) => ({
        label: pokemon.name,
        icon: (
          <img
            src={pokemon.image}
            alt={pokemon.name}
            width={SPACING[7]}
            height={SPACING[7]}
          />
        ),
        id: pokemon.id,
        attack: pokemon.attack,
      })),
    [pokemons]
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

  if (isLoadingUserPokemons || isLoadingOpponentPokemon) {
    return <div>Loading...</div>;
  }

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
