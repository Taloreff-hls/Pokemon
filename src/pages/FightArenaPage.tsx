import { useState, useEffect } from "react";
import colors from "../assets/constants/colors";
import FightArena from "../cmps/FightArena";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { Pokemon } from "../interfaces/Pokemon";
import { LayoutContainer, ContentLayout } from "../styles/LayoutContainer";
import Typography from "../styles/Typography";
import { SPACING } from "../assets/constants/spacings";

interface FightArenaProps {
  userPokemons: Pokemon[];
  allPokemons: Pokemon[];
}

const FightArenaPage = ({ userPokemons, allPokemons }: FightArenaProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(
    userPokemons[0]
  );
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (userPokemons.length > 0 && !selectedPokemon) {
      setSelectedPokemon(userPokemons[0]);
    }
  }, [userPokemons, selectedPokemon]);

  useEffect(() => {
    const nonUserPokemons = allPokemons.filter(
      (pokemon) =>
        !userPokemons.some((userPokemon) => userPokemon.id === pokemon.id)
    );
    const randomOpponent =
      nonUserPokemons[Math.floor(Math.random() * nonUserPokemons.length)];
    setOpponentPokemon(randomOpponent);
  }, [allPokemons, userPokemons]);

  const handleSelectPokemon = (selectedItem: DropdownItem) => {
    const pokemon = userPokemons.find(
      (poke) => poke.name.english === selectedItem.label
    );
    if (pokemon) {
      setSelectedPokemon(pokemon);
    }
  };

  const dropdownOptions: DropdownItem[] = userPokemons.map((pokemon) => ({
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
  }));

  return (
    <LayoutContainer>
      <ContentLayout>
        <Typography
          fontWeight={700}
          type="heading-xxxl"
          color={colors.neutrals[400]}
          aligntext="center"
        >
          Fighting arena
        </Typography>
        <Typography
          fontWeight={400}
          type="medium"
          color={colors.neutrals[500]}
          aligntext="center"
          margin={`0 0 -${SPACING[6]} 0`}
        >
          Press fight button until your or your enemy's power ends
        </Typography>
        <GenericDropdown
          label="Choose Pokemon"
          options={dropdownOptions}
          onSelect={handleSelectPokemon}
          withSearch
          menuPosition="left"
        />
        <FightArena
          selectedPokemon={selectedPokemon}
          opponentPokemon={opponentPokemon}
        />
      </ContentLayout>
    </LayoutContainer>
  );
};

export default FightArenaPage;
