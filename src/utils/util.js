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

export const fetchQuestionsByKeyword = (keyword) => {
  return fetch(` https://developer-mental-health-org.herokuapp.com/api/v1/search/questions/?search=${keyword}`).then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const postNewComment = (newComment) => {
  return fetch('https://developer-mental-health-org.herokuapp.com/api/v1/responses/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then(response => response.json())
  .catch(err => err)
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
  .catch(err => err)
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
  .catch(err => err)
}

export const removeQuestion = (id) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/questions/${id}/`,{
    method: 'DELETE',
  })
  .then(response => response.json())
}

export const removeResponse = (id) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/responses/${id}/`, {
    method: 'DELETE',
  })
  .then(response => response.json())
}

export const updateQuestionText = (id, newQuestionText) => {
  console.log(id, newQuestionText)
  
  
  
  // return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/questions/${id}/`, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(newQuestionText)
  // })
  // .then(response => response.json())
  // .catch(err => console.log(err))
}

///OAUTH CODE -----

// STEP 1:
export const requestLinkedInAuth = (href) => {
  return fetch(`https://www.linkedin.com/oauth/v2/accessToken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      'grant_type': 'authorization_code',
      'code': `${href}`,
      'client_id': '86n4l10lucphsb',
      'client_secret': 'kvQNvGy7foUTrZpi',
      'redirect_uri': 'https%3A%2F%2Fmental-health-fe.herokuapp.com'
    })
  })
  .then(response => response.json())
  .catch(err => err)
}

//STEP 2: PASS BEARER TOKEN:
export const getLinkedInUserData = (bearerToken) => {
  return fetch(`https://www.linkedin.com/oauth/v2/accessToken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    },
  })
  .then(response => response.json())
  .catch(err => err)
}