
// //COMMANDS FOR THE LANDING PAGE -- DO NOT DELETE
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
              "id": 2,
              "title": "test",
              "body": "Questions about anxiety",
              "upvote": 0,
              "downvote": 0,
              "tagging": ['tag1'],
              "created_at": "2021-10-21T21:20:57.757299Z",
              "updated_at": "2021-10-21T21:20:57.757318Z"
          },
          {
              "id": 3,
              "title": "Keyword1 sort of title",
              "body": "Some body of information",
              "upvote": 0,
              "downvote": 0,
              "tagging": [
                  "tag1",
                  "tag2"
              ],
              "created_at": "2021-10-22T00:24:35.360530Z",
              "updated_at": "2021-10-22T00:24:35.360572Z"
          },
      ]
  });
});
// /////////////////