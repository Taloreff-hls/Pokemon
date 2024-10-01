describe("Pokemon Filter", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("filters pokemons by name", () => {
    cy.getDataTest("pokemon-list").find("tr").should("have.length", 10);

    cy.getDataTest("pokemon-search-input").type("Pikachu");

    cy.getDataTest("pokemon-list").find("tr").should("have.length", 1);

    cy.getDataTest("pokemon-list")
      .find("tr")
      .each(($el) => {
        cy.wrap($el).contains("Pikachu");
      });

    cy.getDataTest("table-head-row").click();
    cy.getDataTest("search-input-close").click();

    cy.getDataTest("pokemon-list").find("tr").should("have.length", 10);
  });

  it("filters pokemons by name case insensitively", () => {
    cy.getDataTest("pokemon-search-input").type("pikachu");
    cy.getDataTest("pokemon-list").find("tr").should("have.length", 1);

    cy.getDataTest("table-head-row").click();
    cy.getDataTest("search-input-close").click();
    cy.getDataTest("pokemon-search-input").type("PIKACHU");
    cy.getDataTest("pokemon-list").find("tr").should("have.length", 1);
  });

  it("displays no results message when no pokemons match the filter", () => {
    cy.getDataTest("pokemon-search-input").type("nonexistentpokemon");
    cy.getDataTest("pokemon-list").find("tr").should("have.length", 1);
    cy.getDataTest("no-results-message")
      .should("be.visible")
      .contains("No Pokemons were found.");
  });

  it("restores the full list after clearing the filter", () => {
    cy.getDataTest("pokemon-search-input").type("Pikachu");

    cy.getDataTest("pokemon-list").find("tr").should("have.length", 1);

    cy.getDataTest("table-head-row").click();
    cy.getDataTest("search-input-close").click();

    cy.getDataTest("pokemon-list").find("tr").should("have.length", 10);
  });

  it("filters pokemons by partial name match", () => {
    cy.getDataTest("pokemon-search-input").type("Pik");
    cy.getDataTest("pokemon-list").find("tr").should("have.length", 2);

    cy.getDataTest("pokemon-list")
      .find("tr")
      .each(($el) => {
        cy.wrap($el).contains(/Pik/i);
      });
  });

  it("shows full list when search input is empty", () => {
    cy.getDataTest("pokemon-search-input").clear();
    cy.getDataTest("pokemon-list").find("tr").should("have.length", 10);
  });
});

describe("Pokemon Sorting", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("sorts pokemons by name Z-A", () => {
    cy.selectSortOption("Alphabetical Z-A");

    cy.getDataTest("pokemon-list").find("tr").first().contains("Zygarde");
    cy.getDataTest("pokemon-list").find("tr").last().contains("Zapdos");
  });

  it("sorts pokemons by HP ascending", () => {
    cy.getDataTest("sort-dropdown").select("HP Asc");

    // Get all the HP values and verify they are in ascending order
    cy.getDataTest("pokemon-list")
      .find("tr")
      .then((rows) => {
        const hpValues = [...rows].map(
          (row) => parseInt(row.cells[4].innerText) // Assuming the 5th cell contains the HP
        );
        expect(hpValues).to.deep.equal([...hpValues].sort((a, b) => a - b));
      });
  });

  it("sorts pokemons by HP descending", () => {
    cy.getDataTest("sort-dropdown").select("HP Desc");

    cy.getDataTest("pokemon-list")
      .find("tr")
      .then((rows) => {
        const hpValues = [...rows].map(
          (row) => parseInt(row.cells[4].innerText) // Assuming the 5th cell contains the HP
        );
        expect(hpValues).to.deep.equal([...hpValues].sort((a, b) => b - a));
      });
  });

  it("sorts pokemons by power ascending", () => {
    cy.getDataTest("sort-dropdown").select("Power Asc");

    cy.getDataTest("pokemon-list")
      .find("tr")
      .then((rows) => {
        const powerValues = [...rows].map(
          (row) => parseInt(row.cells[3].innerText) // Assuming the 4th cell contains the power
        );
        expect(powerValues).to.deep.equal(
          [...powerValues].sort((a, b) => a - b)
        );
      });
  });

  it("sorts pokemons by power descending", () => {
    cy.getDataTest("sort-dropdown").select("Power Desc");

    cy.getDataTest("pokemon-list")
      .find("tr")
      .then((rows) => {
        const powerValues = [...rows].map(
          (row) => parseInt(row.cells[3].innerText) // Assuming the 4th cell contains the power
        );
        expect(powerValues).to.deep.equal(
          [...powerValues].sort((a, b) => b - a)
        );
      });
  });
});
