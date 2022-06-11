
describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001', { fixture: 'data.json' })
    cy.visit('http://localhost:3001/home')
  })

  it('Should have header title that says DENDROLOGY+PROJECT', () => {
    cy.get('h1').contains('PROJECT+DENDROLOGY')
  })

  it('Should display the picture and name of the Cat of the Day', () => {
    cy.get('.featured-cat-details').find('img').should('have.attr', 'src')
  })

  it('Should be able to click on All Cats', () => {
    cy.contains('All Cats').click({ force: true })
    cy.url().should('eq', 'http://localhost:3000/cats')
  })

  it('Should be able return to Cat of the Day', () => {
    cy.visit('http://localhost:3000/cats')
    cy.contains('Cat of the Day').click({ force: true })
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('h1').contains('CATURDAY')
    cy.get('.App-title')
    cy.get('.featured-cat-details').find('img').should('have.attr', 'src')
  })
})

describe('Error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds', {
      statusCode: 404,
      body: {
        message: 'Sorry but that file cannot be found'
      }
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the picture and name of the Cat of the Day', () => {
    cy.get('.featured-cat-details').find('img').should('have.attr', 'src', 'https://i.imgflip.com/6ij5tc.jpg')
  })

})