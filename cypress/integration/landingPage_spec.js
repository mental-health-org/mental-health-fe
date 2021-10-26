describe('Interpretation Display User Flows', () => {

  it('A user should see the application title', () => {
   
  });

  it('A user should see all questions on the feed by date order', () => {
   //stub a mock request for all questions on the page
   
   cy.fetchAllQuestions();
   cy.visit('/')
    cy.get('.QuestionsContainer')
    //should have 2 questions
    // should hav titles, bodies, and created at
    // should be in order.
  });

 
  
  it('A user should be able to click the ask a question button to be directed to another page () => {
    cy.visit('/')
    cy.get('.ask-button')
    cy.click()
    cy.url().should('contain', 'ask')
  });

  it('A user should be able to search for available tags', () => {
   
  
 
   cy.visit('/')
   cy.get('.TagSearchBar')
   cy.get('input')
   cy.type('test')
   cy.should('have.value', 'test')
   //then get dropdown values and test those are what you expect based on the stub
   cy.get('.tag-search-button')
  
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

   //TEST FOR GET QUESTIONS BY TAG
  //   cy.fetchAllQuestionsByTag();
  //TEST FOR GET QUESTIONS BY KEYWORD
  //cy.fetchAllQuestionsByKeyword();
  //TEST RESET button

  it('A user should be able to click on a card to be taken to card details', () => {
    cy.visit('/')
    cy.get('.QuestionCard').first()
    cy.click()
    cy.url().should('contain', 'question')
  });

})