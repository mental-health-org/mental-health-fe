describe('Interpretation Display User Flows', () => {

  it('A user should see the header and footer', () => {
  cy.visit('/')
   cy.get('.HeaderTitle--h1')
   cy.should('contain', 'HeLP Network')

   cy.get('.Footer')
   cy.get('footer--title')
   cy.should('contain', 'HeLp Network')
   cy.get('.mission--text')
   cy.should('contain', 'Our mission is to connect expertise across speciality areas of public helping professions to ask and find questions to important legal and ethical concerns central to helping to support our communities and each other.')
  });

  it('A user should see all questions on the feed by date order', () => {
   
   cy.fetchAllQuestions();
  //  cy.visit('/')
    cy.get('.QuestionsContainer')
    cy.get('.QuestionCard').first()
    cy.get('h2')
    cy.should('contain', 'Need Help')
    cy.get('body')
    cy.should('contain', 'Questions about anxiety')
    cy.get('.response-count')
    cy.should('contain', '2')
    cy.get('button')
    cy.should('contain', 'READ')
    cy.get('.detail')
    cy.should('contain', '2021-10-21')


    cy.get('.QuestionsContainer')
    cy.get('.QuestionCard').last()
    cy.get('h2')
    cy.should('contain', 'Some sort of title')
    cy.get('body')
    cy.should('contain', 'Some body of information')
    cy.get('.response-count')
    cy.should('contain', '5')
    cy.should('contain', 'READ')
    cy.get('.detail')
    cy.should('contain', '2021-9-21')
   
  });

 
  
  it('A user should be able to click the ask a question button to be directed to another page', () => {
    cy.visit('/')
    cy.get('.ask-button')
    cy.click()
    cy.url().should('contain', 'ask')
  });

  it('A user should be able to search for available tags', () => {
   
   cy.visit('/')
   cy.get('.TagSearchBar')
   cy.get('input')
   cy.type('tag1')
   cy.should('have.value', 'tag1')
   //then get dropdown values and test those are what you expect based on the stub
   cy.get('.tag-search-button')
   cy.fetchAllQuestionsByTag()
   cy.click()
  
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