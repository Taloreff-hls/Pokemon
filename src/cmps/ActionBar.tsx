import GenericSearchbar from "../genericCmps/searchbar/GenericSearchbar";
import { ControlsContainer, StyledActionBar } from "../styles/StyledActionbar";
import TabContainer from "./TabContainer";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";
import { useState } from "react";

interface ActionBarProps {
  setViewMode: (mode: "list" | "card") => void;
}

const ActionBar = ({ setViewMode }: ActionBarProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <StyledActionBar>
      <ControlsContainer>
        <GenericSearchbar
          placeholder="Search Pokemon"
          value={searchValue}
          onChange={setSearchValue}
        />
        <TabContainer setViewMode={setViewMode} />
      </ControlsContainer>
      <GenericDropdown
        label="Sort By"
        onSelect={() => {}}
        options={SORTING_OPTIONS}
      />
    </StyledActionBar>
  );
};

export default ActionBar;
