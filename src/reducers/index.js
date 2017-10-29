import { combineReducers } from 'redux'
import lilypond from './lilypond'
import shortscore from './shortscore'
import isOk from './isOk'

const rootReducer = combineReducers({
  isOk,
  lilypond,
  shortscore,
})

export default rootReducer
