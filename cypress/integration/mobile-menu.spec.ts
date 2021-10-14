/// <reference types="cypress" />

describe('mobile menu', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:3000')
  })

  it('does not contain sign in link', () => {
    cy.screenshot()
    cy.get('.menu__actions a').contains('Sign in').should('not.be.visible')
  })
  it('should reveal sign in link when clicking hamburger button', () => {
    cy.get('body.hydrated')
    cy.get('header button.toggle').click()

    cy.get('nav.mobile a')
      .contains('Sign in')
      .should('be.visible')
      .should('have.prop', 'href')
      .and('equal', 'https://plus.dropzone.dev/')
  })
  it('should hide sign in link when clicking X button', () => {
    cy.get('body.hydrated')
    cy.get('header button.toggle').click()

    cy.get('nav.mobile a').contains('Sign in').should('be.visible')

    cy.get('header nav button.close').click()

    cy.get('nav.mobile a').contains('Sign in').should('not.be.visible')
  })
})
