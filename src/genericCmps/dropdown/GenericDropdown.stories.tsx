import type { Meta, StoryObj } from "@storybook/react";
import GenericDropdown from "./GenericDropdown";
import { DropdownItem } from "./interfaces";
import pokemonsData from "../../data/pokemon.json";

const pokemons: DropdownItem[] = pokemonsData
  .slice(0, 5)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const meta: Meta<typeof GenericDropdown> = {
  component: GenericDropdown,
  argTypes: {
    label: {
      control: "text",
    },
    withSearch: {
      control: "boolean",
      defaultValue: true,
    },
    onSelect: {
      action: "selected",
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenericDropdown>;

export const Fight: Story = {
  args: {
    label: "Select",
    withSearch: true,
    options: pokemons,
  },
};

export const Sort: Story = {
  args: {
    label: "Sort by",
    options: [
      { label: "Alphabetical A-Z" },
      { label: "Alphabetical Z-A" },
      { label: "Power (High to low)" },
      { label: "Power (Low to high)" },
      { label: "HP (High to low)" },
      { label: "HP (Low to high)" },
    ],
  },
};
