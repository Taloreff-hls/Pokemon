import { useState } from "react";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import pokemonsData from "../data/pokemon.json";

const ExampleDropdown = () => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelectedLabel(label);
    console.log("Selected Item:", label);
  };

  const pokemons: DropdownItem[] = pokemonsData
    .slice(0, 5)
    .map((pokemon: any) => ({
      label: pokemon.name.english,
      icon: (
        <img
          src={pokemon.image.thumbnail}
          alt={pokemon.name.english}
          style={{ width: "20px", height: "20px" }}
        />
      ),
      attack: pokemon.base.Attack,
    }));

  return (
    <div>
      <GenericDropdown
        label="Sort by"
        options={pokemons}
        withSearch={true}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default ExampleDropdown;
