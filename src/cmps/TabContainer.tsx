import GenericTab from "../genericCmps/tab/GenericTab";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useState } from "react";
import { StyledTabContainer } from "../styles/StyledTabContainer";

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <StyledTabContainer>
      <GenericTab
        icon={FormatListBulletedIcon}
        label="List"
        onClick={() => setSelectedTab(0)}
        isSelected={selectedTab === 0}
      />
      <GenericTab
        icon={CalendarViewMonthIcon}
        label="Card"
        onClick={() => setSelectedTab(1)}
        isSelected={selectedTab === 1}
      />
    </StyledTabContainer>
  );
};

export default TabContainer;
