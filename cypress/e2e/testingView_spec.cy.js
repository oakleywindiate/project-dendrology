
describe('Testing page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/test', { fixture: 'data.json'}) 
      cy.visit('http://localhost:3000/test')
    })
  
    it('Should display a title that says DENDROLOGY+PROJECT', () => {
      cy.get('h1').contains('PROJECT+DENDROLOGY')
    })
  
    it('Should display a link that returns the user to the home page', () => {
      cy.contains('HOME').click().url().should('eq', 'http://localhost:3000/home')
    })
  
    it('Should display a link to start testing while viewing the testing page', () => {
      cy.contains('TEST').click().url().should('eq', 'http://localhost:3000/test')
    })
  
    it('Should display a link to review questions while viewing the testing page', () => {
      cy.contains('REVIEW').click().url().should('eq', 'http://localhost:3000/review')
    })
  
    it('Should display a link to the "About" page while viewing the testing page', () => {
      cy.contains('ABOUT').click().url().should('eq', 'http://localhost:3000/about')
    })
  
    it('Should display a button in the header to begin testing', () => {
      cy.get('button.enter-app-link').click().url().should('eq', 'http://localhost:3000/test')
    })
  
  })
  
  