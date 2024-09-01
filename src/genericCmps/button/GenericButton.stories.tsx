import type { Meta, StoryObj } from "@storybook/react";
import GenericButton from "./GenericButton";

const meta: Meta<typeof GenericButton> = {
  component: GenericButton,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "secondary-grey",
        "tertiary",
        "tertiary-grey",
      ],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    label: {
      control: "text",
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenericButton>;

export const Button: Story = {
  args: {
    type: "primary",
    size: "medium",
    label: "Button",
    disabled: false,
  },
};
