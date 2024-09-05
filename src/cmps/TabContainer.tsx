import GenericTab from "../genericCmps/tab/GenericTab";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useState } from "react";
import { StyledTabContainer } from "../styles/StyledTabContainer";
import { ViewMode } from "../interfaces/ViewMode";

interface TabContainerProps {
  setViewMode: (mode: ViewMode["mode"]) => void;
}

const TabContainer = ({ setViewMode }: TabContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabIndex: number, mode: ViewMode["mode"]) => {
    setSelectedTab(tabIndex);
    setViewMode(mode);
  };

  return (
    <StyledTabContainer>
      <GenericTab
        icon={FormatListBulletedIcon}
        label="List"
        onClick={() => handleTabClick(0, "list")}
        isSelected={selectedTab === 0}
      />
      <GenericTab
        icon={CalendarViewMonthIcon}
        label="Card"
        onClick={() => handleTabClick(1, "card")}
        isSelected={selectedTab === 1}
      />
    </StyledTabContainer>
  );
};

export default TabContainer;
