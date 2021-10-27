describe('Question Details Page User Flows', () => {
  it('A user should be able to click on a card to be taken to card details', () => {
    cy.fetchQuestionsByID()
    cy.visit('http://localhost:3000/')
    cy.get('.QuestionCard').first().contains('READ')
    .click()
    cy.get('.HeaderTitle--h1')
    cy.should('contain', 'Question & Answers')
    cy.get('.BackButtonLink--button')
    cy.get('.AskButtonLink--button')
    cy.get('.RespondTextarea--textarea')
    cy.get('.UpVote--button')
    cy.get('.DownVote--button')
    cy.get('.detail').should('contain', 'tester')
  })
    it('A user should be able to click on a card to be taken to card details', () => {
    cy.fetchQuestionsByID()
    cy.visit('http://localhost:3000/')
    cy.get('.QuestionCard').first().contains('READ')
    .click()
    cy.get('.BodyText--p')
    cy.should('contain', 'JUST TEST TEXT')
  })
  it('A user should be able to click the back button to be taken home', () => {
    cy.get('.BackButtonLink--button').click()
    cy.url().should('not.contain', 'question')
  })

  it('A user should be able to click the ask button to be taken to question form page', () => {
    cy.fetchQuestionsByID()
    cy.fetchQuestionsByID()
    cy.visit('http://localhost:3000/')
    cy.get('.QuestionCard').first().contains('READ')
      .click()
    cy.get('.AskButtonLink--button').click()
    cy.url().should('contain', 'ask')
  })

})
