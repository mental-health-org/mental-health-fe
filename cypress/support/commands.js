
//COMMANDS FOR THE LANDING PAGE -- DO NOT DELETE

Cypress.Commands.add('fetchAllQuestions', () => {
  cy.intercept('GET', 'https://developer-mental-health-org.herokuapp.com/api/v1/questions/', {
    statusCode: 200,
    body: [
          {
              "id": 1,
              "title": "Need Help",
              "body": "Questions about anxiety",
              "upvotes": 0,
              "downvotes": 0,
              "tagging": [],
              "created_at": "2021-10-21T21:20:57.757299Z",
              "updated_at": "2021-10-21T21:20:57.757318Z",
              "response_count": 2,
              "user": {
                username: 'testUser1',
                title: 'testTitle1'
              }
          },
          {
              "id": 2,
              "title": "Some sort of title",
              "body": "Some body of information",
              "upvote": 0,
              "downvote": 0,
              "tagging": [
                  "First Tag",
                  "Tag1"
              ],
              "created_at": "2021-10-21T21:20:57.757299Z",
              "updated_at": "2021-9-21T21:20:57.757318Z",
              "response_count": 5,
              "user": {
                username: 'testUser2',
                title: 'testTitle2'
              }
          }

      ]
  });
});
Cypress.Commands.add('fetchAllTags', () => {
  cy.intercept('GET', `https://developer-mental-health-org.herokuapp.com/api/v1/tags`, {
    statusCode: 200,
    body: {
      attributes: [
      "First Tag",
      "Tag1",
      "Tag1"
  ]}
  });
});
Cypress.Commands.add('fetchAllQuestionsByTag', (tag) => {
  cy.intercept('GET', `https://developer-mental-health-org.herokuapp.com/api/v1/filter/questions/?tags=${tag}`, {
    statusCode: 200,
    body: [
      {
          "id": 1,
          "title": "test",
          "body": "Questions about anxiety",
          "upvotes": 0,
          "downvotes": 0,
          "tagging": [],
          "created_at": "2021-10-21T21:20:57.757299Z",
          "updated_at": "2021-10-21T21:20:57.757318Z",
          "response_count": 2,
          "user": {
            username: 'testUser1',
            title: 'testTitle1'
          }
      },
      {
          "id": 2,
          "title": "test",
          "body": "Some body of information",
          "upvote": 0,
          "downvote": 0,
          "tagging": [
              "First Tag",
              "Tag1"
          ],
          "created_at": "2021-10-21T21:20:57.757299Z",
          "updated_at": "2021-9-21T21:20:57.757318Z",
          "response_count": 5,
          "user": {
            username: 'testUser2',
            title: 'testTitle2'
          }
      }
  ]
  });
});
Cypress.Commands.add('fetchAllQuestionsByKeyword', () => {
  cy.intercept('GET', 'https://developer-mental-health-org.herokuapp.com/api/v1/search/questions/?search=test', {
    statusCode: 200,
    body: 
        [
          {
              "id": 3,
              "title": "test",
              "body": "test about anxiety",
              "upvote": 0,
              "downvote": 0,
              "tagging": ['tag1'],
              "created_at": "2021-4-21T21:20:57.757299Z",
              "updated_at": "2021-3-21T21:20:57.757318Z",
              "response_count": 7,
              "user": {
                username: 'testUser2',
                title: 'testTitle2'
              }
          },
          {
              "id": 2,
              "title": "test sort of title",
              "body": "Some body of information",
              "upvote": 0,
              "downvote": 0,
              "tagging": [
                  "tag1",
                  "tag2"
              ],
              "created_at": "2021-4-22T00:24:35.360530Z",
              "updated_at": "2021-4-22T00:24:35.360572Z",
              "response_count": 11,
              "user": {
                username: 'testUser2',
                title: 'testTitle2'
              }
          },
      ]
  });
});

//https://developer-mental-health-org.herokuapp.com/api/v1/questions/${id}
Cypress.Commands.add('fetchQuestionsByID', () => {
  cy.intercept('GET', `https://developer-mental-health-org.herokuapp.com/api/v1/questions/`, {
    statusCode: 200,
    body: [
      {
          "id": 1,
          "title": "Need Help",
          "body": "Questions about anxiety",
          "upvotes": 0,
          "downvotes": 0,
          "tagging": [],
          "created_at": "2021-10-21T21:20:57.757299Z",
          "updated_at": "2021-10-21T21:20:57.757318Z",
          "response_count": 2,
          "user": {
            username: 'testUser1',
            title: 'testTitle1'
          }
        }
        ]
  })

  cy.intercept('GET', 'https://developer-mental-health-org.herokuapp.com/api/v1/questions/1', {
    statusCode: 200,
    body: {
        body: "JUST TEST TEXT",
        created_at: "2021-10-26T20:07:24.809094Z",
        downvotes: 0,
        id: 113,
        responses: [],
        tagging: ['Law', 'Confidentiality', 'Duty To Warn'],
        title: "Duty to Warn -- DHS Clarification",
        updated_at: "2021-10-26T20:07:24.809118Z",
        upvotes: 1,
        user: {username: 'tester', title: 'tester'}
      }
  });

});

// Commands for NewQuestionForm
Cypress.Commands.add('askNewQuestion', () => {
  cy.intercept({
    method: 'POST',
    url: 'https://developer-mental-health-org.herokuapp.com/api/v1/questions/'},
    {
      statusCode: 200,
      body: {
        "attributes": {
          "question": {
            "body": "I am a stubbed question body",
            "created_at": "2021-10-26T03:38:30.718765Z",
            "downvote": 0,
            "id": 103,
            "tagging": [61],
            "title": "I am a stubbed question title",
            "updated_at": "2021-10-26T03:38:30.718792Z",
            "upvote": 0,
            "user": null
          },
          "tags": ['TagStub']
        },
        "id": null,
        "type": "questions"
      }
    }
  )
  cy.get('form.QuestionForm--form')
    .find('input.TitleInput--input').type('I am a stubbed question title')
  cy.get('form.QuestionForm--form')
    .find('textarea.BodyInput--textarea').type('I am a stubbed question body')
  cy.get('form.QuestionForm--form')
    .find('input.TagInput--input').type('TagStub')
  cy.get('button.AddTag--button').click()
  cy.get('#Submit-Button').contains('Submit').click()
  cy.get('#Modal-Submit').click()
  cy.get('button.FindButton--button').click()

}); // end new question command



