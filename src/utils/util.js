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

export const flagQuestion = (postObject) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/qflag/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postObject)
  })
  .then(response => response.json())
  .catch(err => err)
}

export const flagComment = (postObject) => {
  // rid of trailing back slash to try and fix bug.
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/rflag`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postObject)
  })
  .then(response => response.json())
  .catch(err => err)
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

export const getLinkedInUserData = (code) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/auth/linkedin/`, {
    method: 'POST',
    body: JSON.stringify({
      code: code
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .catch(err => err)
}

export const getUserAccountData = (token) => {
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/account/`, {
    method: 'POST',
    body: JSON.stringify({
      token: token
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .catch(err => err)
}