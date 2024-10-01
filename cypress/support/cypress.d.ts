declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-test attribute.
     * @example cy.getDataTest('pokemon-search-input')
     */
    getDataTest(dataTestSelector: string): Chainable<JQuery<HTMLElement>>;
    selectSortOption(optionLabel: string): Chainable<JQuery<HTMLElement>>;
  }
}
