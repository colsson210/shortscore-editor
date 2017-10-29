import fetch from 'isomorphic-fetch'

export const SET_LILYPOND = 'SET_LILYPOND'
export const setLilypond = (text) => {
  return {
    type: SET_LILYPOND,
    text
  }
}

export const SET_SHORTSCORE = 'SET_SHORTSCORE'
export const setShortscore = (text) => {
  return {
    type: SET_SHORTSCORE,
    text
  }
}

export const RECEIVE_CHECK = 'RECEIVE_CHECK'
export const receiveCheck = (isOk = false) => {
  return {
    type: RECEIVE_CHECK,
    isOk,
  }
}

export function fetchCheck({ lilypond, shortscore }) {
  return (dispatch) => {
    const headers = { 'Content-Type': 'application/json' };
    const url = 'http://localhost:5000/check/'
    return fetch(url, { method: 'POST', headers, body: JSON.stringify({ lilypond, shortscore }) })
      .then(response => response.json())
      .then(({check}) => check)
      .then(check => dispatch(receiveCheck(check)))
      .catch(console.log)
  }
}
