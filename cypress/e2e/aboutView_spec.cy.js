describe('About page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/test', { fixture: 'data.json'}) 
      cy.visit('http://localhost:3000/about')
    })
  
    it('Should display a title that says DENDROLOGY+PROJECT', () => {
      cy.get('h1').contains('PROJECT+DENDROLOGY')
    })
  
    it('Should display a link that returns the user to the home page', () => {
      cy.contains('HOME').click().url().should('eq', 'http://localhost:3000/home')
    })
  
    it('Should display a link to start testing while viewing the "About" page', () => {
      cy.contains('TEST').click().url().should('eq', 'http://localhost:3000/test')
    })
  
    it('Should display a link to review questions while viewing the "About" page', () => {
      cy.contains('REVIEW').click().url().should('eq', 'http://localhost:3000/review')
    })
  
    it('Should display a link to the "About" page while viewing the "About" page', () => {
      cy.contains('ABOUT').click().url().should('eq', 'http://localhost:3000/about')
    })
  
    it('Should display a button in the header to begin testing', () => {
      cy.get('button.enter-app-link').click().url().should('eq', 'http://localhost:3000/test')
    })

    it('Should display "About" page astronaut', () => {
      cy.get('.welcome-astronaut-about').should('be.visible')
    })

    it('Should display "About" section teaser', () => {
        cy.get('div.article-about').children().contains(`Hello, Explorer, and welcome to the Dendrology Project. I am an AI that was created by a group of scientists working to preserve the planet called Earth. My purpose is to prepare you for your mission to study this planet and the many species of flora that populate it's surface-- if you choose to accept it. This is no easy task, as the planet has been ravaged by industry, yet the burden of knowledge weighs upon us to act. The conservation of the planet is our priority. So, I ask you, will you join us?`)
      })

    it('Should display "About" section instructions for use', () => {
        cy.get('div.article-about').children().contains(`To start testing, select "ENTER APP" located on the right upper quadrant of your screen device. You will be prompted to complete a series of dendrological questions pertaining to this planet. You can review your incorrect questions at any time by selecting the "REVIEW" tab located in the navigation bar above.`)
      })
  
  })
