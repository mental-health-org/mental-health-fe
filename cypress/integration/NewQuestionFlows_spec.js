beforeEach(() => {
  cy.visit('http://localhost:3000/#/ask')
});

describe('User flows and functionaloty for asking a new question', () => {

  it('should confirm true to be true', () => {
    expect(true).to.equal(true)
  });

  it('should visit the correct URL', () => {
    cy.url().should('include', '/ask')
  })

  it('should render a header that includes the correct text', () => {
    cy.get('header').contains('Ask a Question')
  })

  it('should render a form that includes the correct elements', () => {
    cy.get('form.QuestionForm--form')
      .find('label.InputLabel--label').should('have.length', 3)
    cy.get('form.QuestionForm--form')
      .find('input.TitleInput--input')
    cy.get('form.QuestionForm--form')
      .find('textarea.BodyInput--textarea')
    cy.get('form.QuestionForm--form')
      .find('input.TagInput--input')
    cy.get('div.QuestionTags--container')
    cy.get('button.AddTag--button')
    cy.get('button.BackHomeButton--btn').find('span.BackButtonText--span').contains('Back')
    cy.get('#Submit-Button').contains('Submit')
  })

  it('Should allow the user to go back to the home page when clicking the back button', () => {
    cy.get('button.BackHomeButton--btn').find('span.BackButtonText--span').contains('Back').click()
    cy.url().should('include', '/')
  })

  it('should allow the user to input a tag and see it after clicking the add tag button', () => {
    cy.get('form.QuestionForm--form')
    .find('input.TagInput--input').type('Anxiety')
    cy.get('button.AddTag--button').click()
    cy.get('div.QuestionTags--container').find('p.UserTagPill--text').contains('Anxiety')
  })

  it.only('Should render a new question on the landing page after submission', () => {
    cy.visit('/#/')
    cy.get('button.ask--btn').click()
    cy.askNewQuestion()
    cy.get('div.QuestionCard').find('h2.questionCard--h2').contains('I am a stubbed question title')
  })



}); // end describe block