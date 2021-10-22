export const fetchAllQuestions = () => {
  return fetch('https://developer-mental-health-org.herokuapp.com/api/v1/questions').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchAllTags = () => {
  return fetch('https://developer-mental-health-org.herokuapp.com/api/v1/tags').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchQuestionsByTag = () => {
  const keyword = 'addiction';
  return fetch(`https://developer-mental-health-org.herokuapp.com/api/v1/tag/${keyword}`).then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}





// api/v1/questions  - GET, POST
// api/v1/questions/:id - GET
// api/v1/tags - GET
// api/v1/tags/:id - GET
// api/v1/posts/:id 