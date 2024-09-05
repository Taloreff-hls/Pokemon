import GenericSearchbar from "../genericCmps/searchbar/GenericSearchbar";
import { ControlsContainer, StyledActionBar } from "../styles/StyledActionbar";
import TabContainer from "./TabContainer";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";
import { useState } from "react";
import { ViewMode } from "../interfaces/ViewMode";

interface ActionBarProps {
  setViewMode: (mode: ViewMode["mode"]) => void;
  setSearchValue: (value: string) => void;
}

const ActionBar = ({ setViewMode, setSearchValue }: ActionBarProps) => {
  const [searchValue, setSearch] = useState("");

  function handleSearch(value: string) {
    setSearch(value);
    setSearchValue(value);
  }
  return (
    <StyledActionBar>
      <ControlsContainer>
        <GenericSearchbar
          placeholder="Search Pokemon"
          value={searchValue}
          onChange={handleSearch}
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
