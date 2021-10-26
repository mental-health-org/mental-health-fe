export const fetchAllQuestions = () => {
  return fetch('https://developer-mental-health-org.herokuapp.com/api/v1/questions/').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchAllTags = () => {
  return fetch('https://developer-mental-health-org.herokuapp.com/api/v1/tags').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchQuestionsByTag = (tag) => {
  return fetch(` https://developer-mental-health-org.herokuapp.com/api/v1/filter/questions/?tags=${tag}`).then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchQuestionByID = (id) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/questions/${id}`).then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

///POST NEW COMMENT AND QUESTION WILL BOTH NEED THIS.
// const [user, setUser] = useState(
//   {
//       "id": 1,
//       "username": "TestUser",
//       "title": null,
//       "created_at": "2021-10-21T19:13:02.707669Z",
//       "updated_at": "2021-10-21T19:13:02.707686Z"
//   })

export const postNewComment = (newComment) => {
  return fetch('https://developer-mental-health-org.herokuapp.com/api/v1/responses/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then(response => response.json())
}

export const fetchQuestionsByKeyword = (keyword) => {
  return fetch(` https://developer-mental-health-org.herokuapp.com/api/v1/search/questions/?search=${keyword}`).then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const postQuestionVote = (questionVote) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/qvote/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(questionVote)
  })
  .then(response => response.json())
}

export const postResponseVote = (commentVote) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/rvote/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentVote)
  })
  .then(response => response.json())
}

// api/v1/questions/  - GET, POST
// api/v1/questions/:id - GET
// api/v1/tags - GET
// api/v1/tags/:id - GET
// api/v1/posts/:id 


// When a user clicks the upvote on a question you will need to send this json over to
// /api/v1/qvote/
// {
// "user": "45"
// "post": "20"
// "vote_type": "1"
// }
// When a user clicks the downvote on a question you will need to send this json over to
// /api/v1/qvote/
// {
// "user": "45"
// "post": "20"
// "vote_type": "2"
// } 
// When a user clicks the upvote on a response you will need to send this json over to
// /api/v1/rvote/
//  {
// "user": "45"
// "response": "25"
// "vote_type": "1"
// } 
// When a user clicks the downvote on a response you will need to send this json over to
// /api/v1/rvote/
//  {
// "user": "45"
// "response": "25"
// "vote_type": "2"
// } 
