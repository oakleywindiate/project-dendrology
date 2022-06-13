
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

    it('Should display a the common name of a tree', () => {
      cy.get('div.common-name').should('exist')
    })

    it('Should display a the scientific name of a tree', () => {
      cy.get('div.scientific-name').should('exist')
    })

    it('Should display an input box for scientific name', () => {
      cy.get('form').should('exist')
    })

    it('Should be able to type a name then submit it', () => {
      cy.get('form').type('Quercus acutissima').submit()
    })

    it('Should increment the score by one point if correct', () => {
      cy.get('form').type('Quercus acutissima').submit()
      cy.get('h5.correct').should('have.text', 'Correct: 1')
    })

    it('Should decrement the score by one point if incorrect', () => {
      cy.get('form').type('banana').submit()
      cy.get('h5.incorrect').should('have.text', 'Incorrect: 1')
    })
  
  })

  describe('Error handling', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/test', {
        statusCode: 404,
        body: {
          message: 'An error has occurred with our testing AI. Please try again.'
        }
      })
      cy.visit('http://localhost:3000/test')
    })
  
    it('Should display an error message', () => {
      cy.get('h3.error-message').should('have.text', 'An error has occurred with our testing AI. Please try again.')
    })
  
  })
  
  