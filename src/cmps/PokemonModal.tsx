import React from "react";
import { Pokemon } from "../interfaces/Pokemon";
import GenericButton from "../genericCmps/button/GenericButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Ability,
  CloseButton,
  DetailsContainer,
  Footer,
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
          <PokemonName>{pokemon.name.english}</PokemonName>
          <ImageContainer>
            <PokemonImage
              src={pokemon.image.hires}
              alt={pokemon.name.english}
            />
          </ImageContainer>
          <DetailsContainer>
            <PokemonDetail>{pokemon.description}</PokemonDetail>
            <PokemonStats>
              <PokemonStat>
                <div>Height</div>
                <div>{pokemon.profile.height}</div>
              </PokemonStat>
              <PokemonStat>
                <div>Weight</div>
                <div>{pokemon.profile.weight}</div>
              </PokemonStat>
              <PokemonStat>
                <div>Category</div>
                <div>{pokemon.type[0]}</div>
              </PokemonStat>
              <PokemonStat>
                <div>Abilities</div>
                <Ability>{pokemon.profile.ability[0][0]}</Ability>
              </PokemonStat>
            </PokemonStats>
          </DetailsContainer>
        </InnerContainer>
        <Footer>
          <GenericButton
            label="Start a Fight"
            onClick={() => console.log("starting fight")}
            size="medium"
            type="primary"
            fontWeight="400"
            fontSize="16px"
          />
        </Footer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PokemonModal;
