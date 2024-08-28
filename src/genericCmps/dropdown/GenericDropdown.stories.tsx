import type { Meta, StoryObj } from "@storybook/react";
import GenericDropdown from "./GenericDropdown";
import { DropdownItem } from "./interfaces";

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

const pokemons: DropdownItem[] = [
  { label: "Bulbasaur", detail: "20px" },
  { label: "Caterpie", detail: "22px" },
  { label: "Wartortle", detail: "30px" },
  { label: "Pidgey", detail: "26px" },
  { label: "Weedle", detail: "10px" },
];

const sortOptions: DropdownItem[] = [
  { label: "Alphabetical A-Z" },
  { label: "Alphabetical Z-A" },
  { label: "Power (High to low)" },
  { label: "Power (Low to high)" },
  { label: "HP (High to low)" },
  { label: "HP (Low to high)" },
];

export const Fight: Story = {
  args: {
    label: "Select Pokémon",
    withSearch: true,
    options: pokemons,
  },
};

export const Sort: Story = {
  args: {
    label: "Sort by",
    options: sortOptions,
  },
};
