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
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/questions/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newQuestionText)
  })
  .then(response => response.json())
  .catch(err => console.log(err))
}

export const updateCommentText = (id, newCommentText) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/responses/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCommentText)
  })
  .then(response => response.json())
  .catch(err => console.log(err))
}

///OAUTH CODE -----

// STEP 1:
//woudld this request be sent to the backend and be sent back to the frontend.
//frontend would send the code found in the url to the backend.
// backend would make this request to linkedin with this code to get back the access code. (we would as a FE need to make a get request that included the code in the body) 
export const requestLinkedInAuth = (codeFromURL) => {
  return fetch(`https://www.linkedin.com/oauth/v2/accessToken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      'grant_type': 'authorization_code',
      'code': `${codeFromURL}`,
      'client_id': '86n4l10lucphsb',
      'client_secret': 'kvQNvGy7foUTrZpi',
      'redirect_uri': 'https%3A%2F%2Fmental-health-fe.herokuapp.com'
    })
  })
  .then(response => response.json())
  .catch(err => err)
}
//backend would then get the response from linkedin which the access token and send that in a second request to linkedin

// {
//   "access_token": "AQU280QIiP8DD_GNFzS_GVnHVeHf7eJDTXWYQfdZUFfceaKqSXhgLlXhPb7g7QFpBzCxgngtLmcNGcVWqJbkXnfsRyAOrV2Su1vJIp3z1BlQRLeWee0vbBc8RaZ9qEOeDYqcnse_IEBAsQHdonTmtISBIlNEcZ9md1dQjxbrWrJUjVE70R8sYqE5dxSpuwgmiUuN9875b0Ad_-zadtB7KEBVxnUYyf42KzsfbaH9I0oYhPzdxoKLi62HgPTjtLxPBPO9Fh1frt_R9fd0Jnw3CyP3mHD7-9J0QNnKNZ8hrpUzb2t-2PWO1B5OwwSLJ_9zGi3ymQicX-ZqwuBq9IhzmLJ5hgTAAQ",
//   "expires_in": 5183999
// }

//STEP 2: PASS BEARER TOKEN:
export const getLinkedInUserData = (bearerToken) => {
  return fetch(`https://api.linkedin.com/v2/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`,
      'Access-Control-Allow-Origin': '*',
    },
  })
  .then(response => response.json())
  .catch(err => err)
}