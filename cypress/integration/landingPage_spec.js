describe('Interpretation Display User Flows', () => {
  it('A user should see the header and footer', () => {
    cy.fetchAllQuestions()
    cy.visit('http://localhost:3000/')
    cy.get('.HeaderTitle--h1')
    cy.should('contain', 'HeLP Network')
    cy.get('.Footer')
    cy.get('.footer--title')
    cy.should('contain', 'HeLP Network')
    cy.get('.mission--text')
    cy.should('contain', 'Our mission is to connect expertise across speciality areas of public helping professions to ask and find questions to important legal and ethical concerns central to helping to support our communities and each other.')
  });

  it('A user should see all questions on the feed by date order', () => {
    cy.fetchAllQuestions();
    cy.visit('http://localhost:3000/')
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
    cy.get('button')
    cy.should('contain', 'READ')
    cy.get('.detail')
    cy.should('contain', '2021-9-21')
  });

  it('A user should be able to click the ask a question button to be directed to another page', () => {
    cy.get('.ask--btn').click()
    cy.url().should('contain', 'ask')
  });


  //TO DO - come back to testing this!
  it('A user should be able to search for available tags', () => {
    cy.fetchAllQuestions()
    cy.fetchAllTags()
    cy.visit('http://localhost:3000/')
    cy.fetchAllQuestionsByTag('Tag1')
    cy.get('.MuiOutlinedInput-root').type('First Tag').type('{enter}').type('{enter}')
    cy.get('.MuiOutlinedInput-root').type('{enter}')

    //add an id to the drop down ---

    //.should("have.value", "Beef");
    // cy.findByText('First Tag').click()
  
    //then get dropdown values and test those are what you expect based on the stub
    //  cy.fetchAllQuestionsByTag('Tag1')
  });

  it('A user should be able to filter questions by tag', () => {
    //stub a mock request for filtered questions
    cy.fetchAllQuestions()
    cy.visit('http://localhost:3000/')
    cy.get('.filterByTitle--input').get('input').type('test')
    cy.should('have.value', 'test')
    
    //find button to search and click.
    //stub out response with dummy data.
    // cy.get()

    // cy.get('.TagSearchBar')
    //    cy.get('.filterByTitle--input').last()
    //    .type('Tag1')
    //    cy.should('have.value', 'Tag1')
    //    //then get dropdown values and test those are what you expect based on the stub
    cy.fetchAllQuestionsByKeyword()
    cy.get('.search--btn')
    .click()
  });


//   //TEST RESET button

//   it('A user should be able to click on a card to be taken to card details', () => {
//     cy.visit('/')
//     cy.get('.QuestionCard').first()
//     cy.click()
//     cy.url().should('contain', 'question')
//   });

// })