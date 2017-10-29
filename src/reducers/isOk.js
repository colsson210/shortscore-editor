import {
  RECEIVE_CHECK,
} from '../actions'

const isOk = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_CHECK:
      return action.isOk
    default:
      return state
  }
}

export default isOk
