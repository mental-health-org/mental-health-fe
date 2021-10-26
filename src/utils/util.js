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

// api/v1/questions/  - GET, POST
// api/v1/questions/:id - GET
// api/v1/tags - GET
// api/v1/tags/:id - GET
// api/v1/posts/:id 

