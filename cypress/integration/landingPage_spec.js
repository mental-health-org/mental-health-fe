describe('Interpretation Display User Flows', () => {

  it('A user should see the application title', () => {
   
  });

  it('A user should see all questions on the feed by date order', () => {
   //stub a mock request for all questions on the page
   //questions should be in date order.
  });
  
  it('A user should be able to click the ask a question button to be directed to another page () => {
    cy.visit('/')
    cy.get('.ask-button')
    cy.click()
    cy.url().should('contain', 'ask')
  });

  it('A user should be able to search for available tags', () => {
  // stub a mock request for tags.
   cy.visit('/')
   cy.get('.TagSearchBar')
   cy.get('input')
   cy.type('test')
   cy.should('have.value', 'test')
   //then get dropdown values and test those are what you expect based on the stub
  
  });

  it('A user should be able to filter questions by tag', () => {
    //stub a mock request for filtered questions
    cy.visit('/')
    cy.get('.TagSearchBar')
    cy.get('input')
    cy.type('test')
    cy.should('have.value', 'test')
    //find button to search and click.
    //stub out response with dummy data.
    cy.get()
  });

})