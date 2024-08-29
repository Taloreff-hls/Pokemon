import type { Meta, StoryObj } from "@storybook/react";
import GenericTab from "./GenericTab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";

const meta: Meta<typeof GenericTab> = {
  component: GenericTab,
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["default", "hover", "pressed"],
      },
    },
    label: {
      control: "text",
    },
    icon: {
      control: {
        type: "select",
        options: {
          List: FormatListBulletedIcon,
          Calendar: CalendarViewMonthIcon,
        },
      },
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenericTab>;

export const ListTab: Story = {
  args: {
    state: "default",
    label: "List",
    icon: FormatListBulletedIcon,
    onClick: () => {},
  },
};

export const CalendarTab: Story = {
  args: {
    state: "default",
    label: "Card",
    icon: CalendarViewMonthIcon,
    onClick: () => {},
  },
};
