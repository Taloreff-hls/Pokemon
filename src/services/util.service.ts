export const utilService = {
  getSortParams,
};

function getSortParams(label: string): {
  sort_by: string;
  sort_order: string;
} {
  switch (label) {
    case "Alphabetical A-Z":
      return { sort_by: "name", sort_order: "asc" };
    case "Alphabetical Z-A":
      return { sort_by: "name", sort_order: "desc" };
    case "Power (High to low)":
      return { sort_by: "attack", sort_order: "desc" };
    case "Power (Low to high)":
      return { sort_by: "attack", sort_order: "asc" };
    case "HP (High to low)":
      return { sort_by: "hp", sort_order: "desc" };
    case "HP (Low to high)":
      return { sort_by: "hp", sort_order: "asc" };
    default:
      return { sort_by: "name", sort_order: "asc" };
  }
}
