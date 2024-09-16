import type { Meta, StoryObj } from "@storybook/react";
import GenericButton from "./GenericButton";
import { ButtonSizeEnum, ButtonTypeEnum } from "../../enums/ButtonEnum";

const meta: Meta<typeof GenericButton> = {
  component: GenericButton,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: [
        ButtonTypeEnum.Primary,
        ButtonTypeEnum.Secondary,
        ButtonTypeEnum.SecondaryGrey,
        ButtonTypeEnum.Tertiary,
        ButtonTypeEnum.TertiaryGrey,
      ],
    },
    size: {
      control: {
        type: "select",
      },
      options: [
        ButtonSizeEnum.Small,
        ButtonSizeEnum.Medium,
        ButtonSizeEnum.Large,
      ],
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
    type: ButtonTypeEnum.Primary,
    size: ButtonSizeEnum.Medium,
    label: "Button",
    disabled: false,
  },
};
