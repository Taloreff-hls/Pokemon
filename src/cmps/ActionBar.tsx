import GenericSearchbar from "../genericCmps/searchbar/GenericSearchbar";
import { ControlsContainer, StyledActionBar } from "../styles/StyledActionbar";
import TabContainer from "./TabContainer";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";
import { useState } from "react";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { ViewModeEnum } from "../enums/ViewModeEnum";

interface ActionBarProps {
  setViewMode: (mode: ViewModeEnum) => void;
  setSearchValue: (value: string) => void;
  setSortOption: (value: DropdownItem) => void;
}

const ActionBar = ({
  setViewMode,
  setSearchValue,
  setSortOption,
}: ActionBarProps) => {
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
          width={293}
        />
        <TabContainer setViewMode={setViewMode} />
      </ControlsContainer>
      <GenericDropdown
        label="Sort By"
        onSelect={(item) => {
          setSortOption(item);
        }}
        options={SORTING_OPTIONS}
      />
    </StyledActionBar>
  );
};

export default ActionBar;
