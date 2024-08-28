import type { Meta, StoryObj } from "@storybook/react";
import GenericSearchbar from "./GenericSearchbar";

const meta: Meta<typeof GenericSearchbar> = {
  component: GenericSearchbar,
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["default", "hover", "pressed", "afterSearch", "disabled"],
      },
    },
    placeholder: {
      control: "text",
      defaultValue: "Search",
    },
    value: {
      control: "text",
      defaultValue: "",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenericSearchbar>;

export const Searchbar: Story = {
  args: {
    state: "default",
    placeholder: "Search",
    value: "",
    disabled: false,
  },
};
