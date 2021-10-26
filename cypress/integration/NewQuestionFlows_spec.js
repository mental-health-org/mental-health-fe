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

  it.only('should render a form that includes the correct elements', () => {
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
    
  })

  it('Should render two buttons, back and submit', () => {
    
  })

  it('Should allow the user to go back to the home page when clicking the back button', () => {

  })

  it('should allow the user to input a tag and see it after clicking the add tag button', () => {

  })

}); // end describe block