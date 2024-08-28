import { useState } from "react";
import GenericDropdown from "../genericCmps/dropdown/GenericDropdown";
import { DropdownItem } from "../genericCmps/dropdown/interfaces";

const ExampleDropdown = () => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelectedLabel(label);
    console.log("Selected Item:", label);
  };

  const options: DropdownItem[] = [
    { label: "Bulbasaur", detail: "20px" },
    { label: "Caterpie", detail: "22px" },
    { label: "Wartortle", detail: "30px" },
    { label: "Pidgey", detail: "26px" },
    { label: "Weedle", detail: "10px" },
  ];

  return (
    <div>
      <GenericDropdown
        label="Sort by"
        options={options}
        withSearch={true}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default ExampleDropdown;
