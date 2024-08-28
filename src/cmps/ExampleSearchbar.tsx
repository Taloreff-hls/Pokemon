import { useState } from "react";
import GenericSearchbar from "../genericCmps/searchbar/GenericSearchbar";

const ExampleSearchbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    console.log("Search Value:", value);
  };

  return (
    <div>
      <GenericSearchbar
        state="default"
        placeholder="Search here..."
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default ExampleSearchbar;
