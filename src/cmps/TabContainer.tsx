import GenericTab from "../genericCmps/tab/GenericTab";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useState } from "react";
import { StyledTabContainer } from "../styles/StyledTabContainer";
import { ViewModeEnum } from "../enums/ViewModeEnum";

interface TabContainerProps {
  setViewMode: (mode: ViewModeEnum) => void;
}

const TabContainer = ({ setViewMode }: TabContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabIndex: number, mode: ViewModeEnum) => {
    setSelectedTab(tabIndex);
    setViewMode(mode);
  };

  return (
    <StyledTabContainer>
      <GenericTab
        icon={FormatListBulletedIcon}
        label="List"
        onClick={() => handleTabClick(0, ViewModeEnum.List)}
        isSelected={selectedTab === 0}
      />
      <GenericTab
        icon={CalendarViewMonthIcon}
        label="Card"
        onClick={() => handleTabClick(1, ViewModeEnum.Card)}
        isSelected={selectedTab === 1}
      />
    </StyledTabContainer>
  );
};

export default TabContainer;
