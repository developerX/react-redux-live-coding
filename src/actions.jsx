export const updateName = (name) => {
  return {
    type: 'UPDATE_NAME',
    payload: name
  }
}


// import our action
// use action on change
// updated name field
// rerender (automagically)