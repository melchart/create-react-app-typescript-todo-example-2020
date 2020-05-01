// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to make a Percy snapshot
     * @example cy.percySnapshot('name')
     */
    percySnapshot(value: string): void
  }
}
