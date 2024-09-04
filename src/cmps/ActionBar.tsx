import { useState } from "react";
import GenericSearchbar from "../genericCmps/searchbar/GenericSearchbar";
import { ControlsContainer, StyledActionBar } from "../styles/StyledActionbar";
import TabContainer from "./TabContainer";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { SORTING_OPTIONS } from "../assets/constants/sortingOptions";

const ActionBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <StyledActionBar>
      <ControlsContainer>
        <GenericSearchbar
          placeholder="Search Pokemon"
          value={searchValue}
          onChange={setSearchValue}
        />
        <TabContainer />
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
