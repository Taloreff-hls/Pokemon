import GenericSearchbar from "../genericCmps/searchbar/GenericSearchbar";
import { ControlsContainer, StyledActionBar } from "../styles/StyledActionbar";
import TabContainer from "./TabContainer";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";
import { useState } from "react";

const SORTING_OPTIONS: DropdownItem[] = [
  { label: "Alphabetical A-Z" },
  { label: "Alphabetical Z-A" },
  { label: "Power (High to low)" },
  { label: "Power (Low to high)" },
  { label: "HP (High to low)" },
  { label: "HP (Low to high)" },
];

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
        onSelect={() => console.log("sorting")}
        options={SORTING_OPTIONS}
      />
    </StyledActionBar>
  );
};

export default ActionBar;
