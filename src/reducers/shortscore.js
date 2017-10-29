const shortscore = (state = '', action) => {
  switch (action.type) {
    case 'SET_SHORTSCORE':
      return action.text
    default:
      return state
  }
}

export default shortscore
