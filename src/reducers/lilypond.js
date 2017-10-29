const lilypond = (state = '', action) => {
  switch (action.type) {
    case 'SET_LILYPOND':
      return action.text
    default:
      return state
  }
}

export default lilypond
