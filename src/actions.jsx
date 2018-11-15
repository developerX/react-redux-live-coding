import axios from 'axios';
const token = {
  "Authorization" : 'token 7f29e98d0e05938dbd6478831ccb8226b5207ec3'
}

export const updateName = (name) => {
  return {
    type: 'UPDATE_NAME',
    payload: name
  }
}

export const getUserFromGithub = (username) => {
  return dispatch => {
    axios.get(`https://api.github.com/users/${username}`,
    {
      headers: {
        ...token
      }
    })
    .then(results => {
      //Communicate with reducers
      dispatch({
        type: "GITHUB_GET",
        payload: results.data
      })
    })
    .catch(payload => {
      //communicate with reducers
      dispatch({
        type: "GITHUB_ERROR",
        payload
      })
    })
  }
}

// import our action
// use action on change
// updated name field
// rerender (automagically)