import React from "react";
import { Pokemon } from "../interfaces/Pokemon";
import CloseIcon from "@mui/icons-material/Close";
import {
  Ability,
  CloseButton,
  DetailsContainer,
  ImageContainer,
  InnerContainer,
  ModalContainer,
  ModalOverlay,
  PokemonDetail,
  PokemonId,
  PokemonImage,
  PokemonName,
  PokemonStat,
  PokemonStats,
  StatCategory,
} from "../styles/StyledPokemonModal";

interface PokemonModalProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  const formattedId = `#${pokemon.id.toString().padStart(4, "0")}`;

  return (
    <ModalOverlay>
      <ModalContainer>
        <InnerContainer>
          <CloseButton onClick={onClose}>
            <CloseIcon fontSize="large" />
          </CloseButton>
          <PokemonId>{formattedId}</PokemonId>
          <PokemonName>{pokemon.name}</PokemonName>
          <ImageContainer>
            <PokemonImage src={pokemon.image} alt={pokemon.name} />
          </ImageContainer>
          <DetailsContainer>
            <PokemonDetail>{pokemon.description}</PokemonDetail>
            <PokemonStats>
              <PokemonStat>
                <StatCategory>Height</StatCategory>
                <Ability>{pokemon.height}</Ability>
              </PokemonStat>
              <PokemonStat>
                <StatCategory>Weight</StatCategory>
                <Ability>{pokemon.weight}</Ability>
              </PokemonStat>
              <PokemonStat>
                <StatCategory>Category</StatCategory>
                <Ability>{pokemon.type[0]}</Ability>
              </PokemonStat>
              <PokemonStat>
                <StatCategory>Abilities</StatCategory>
                <Ability>{pokemon.abilities[0]}</Ability>
              </PokemonStat>
            </PokemonStats>
          </DetailsContainer>
        </InnerContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PokemonModal;
