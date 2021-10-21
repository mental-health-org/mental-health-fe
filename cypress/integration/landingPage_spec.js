// describe('Interpretation Display User Flows', () => {

//   it('A user should see the application title', () => {
   
//   });

//   it('A user should see all questions on the feed by date order', () => {
//    //stub a mock request for all questions on the page
//    //questions should be in date order.
//    cy.intercept('GET', 'http://PUT DOMAIN HERE/api/v1/questions', {
//     statusCode: 200,
//     body: {
//       data: [
//         {
//           questions: {
//              tags:
//              id: null,
//              type: "questions",
//              attributes: {
//               question_count: 1200,
//               questions: [
//                {
//                 id: 1,
//                 title: "Need Help",
//                 responses: 10
//                 tags: [addiction, depression]
//                },
//                {
//                  id: 2,
//                    title: "Legal question",
//                    responses: 15
//                 tags: [addiction, sadage]
//                },
//                {
//                 id: 3,
//                 title: "How do I?",
//                 responses: 20
//                 tags: [sadage, depression]
//                }]
//               }
//              }
//         },
//       ],
//     },
//   });
//    cy.visit('/')
//     cy.get('.QuestionsContainer')
//   });
  
//   it('A user should be able to click the ask a question button to be directed to another page () => {
//     cy.visit('/')
//     cy.get('.ask-button')
//     cy.click()
//     cy.url().should('contain', 'ask')
//   });

//   it('A user should be able to search for available tags', () => {
//     cy.intercept('GET', 'http://PUT DOMAIN HERE/api/v1/tags', {
//     statusCode: 200,
//     body: {
//       data: { tags: {
//          id: null,
//          type: "tags",
//          attributes: {
//           tags: [
//            {
//             id: 1,
//             name: "Addication",
//            },
//            {
//              id: 2,
//                name: "Depression",
//            },
//            {
//             id: 3,
//             name: "Sadage",
//            }
//            ]
//           }
//          }
//         }
//       })
//   // stub a mock request for tags.
//    cy.visit('/')
//    cy.get('.TagSearchBar')
//    cy.get('input')
//    cy.type('test')
//    cy.should('have.value', 'test')
//    //then get dropdown values and test those are what you expect based on the stub
//    cy.get('.tag-search-button')
  
//   });

//   it('A user should be able to filter questions by tag', () => {
//     //stub a mock request for filtered questions
//     cy.visit('/')
//     cy.get('.TagSearchBar')
//     cy.get('input')
//     cy.type('test')
//     cy.should('have.value', 'test')
//     //find button to search and click.
//     //stub out response with dummy data.
//     cy.get()
//   });

//   it('A user should be able to click on a card to be taken to card details', () => {
//     cy.visit('/')
//     cy.get('.QuestionCard').first()
//     cy.click()
//     cy.url().should('contain', 'question')
//   });

// })