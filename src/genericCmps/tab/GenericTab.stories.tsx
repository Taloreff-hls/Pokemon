import type { Meta, StoryObj } from "@storybook/react";
import GenericTab from "./GenericTab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import { useState } from "react";
import Box from "@mui/material/Box";

const meta: Meta<typeof GenericTab> = {
  component: GenericTab,
  argTypes: {
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
    isSelected: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof GenericTab>;

export const ListTab: Story = {
  args: {
    label: "List",
    icon: FormatListBulletedIcon,
    isSelected: false,
    onClick: () => {},
  },
};

export const CalendarTab: Story = {
  args: {
    label: "Card",
    icon: CalendarViewMonthIcon,
    isSelected: false,
    onClick: () => {},
  },
};

export const TabContainer: Story = () => {
  const [selectedTab, setSelectedTab] = useState<"list" | "card">("list");

  return (
    <Box display="flex" gap="8px">
      <GenericTab
        label="List"
        icon={FormatListBulletedIcon}
        isSelected={selectedTab === "list"}
        onClick={() => setSelectedTab("list")}
      />
      <GenericTab
        label="Card"
        icon={CalendarViewMonthIcon}
        isSelected={selectedTab === "card"}
        onClick={() => setSelectedTab("card")}
      />
    </Box>
  );
};
