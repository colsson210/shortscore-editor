import React from 'react'
import PropTypes from 'prop-types'

import Editor from './Editor'

const LilypondEditor = ({ onLilypondChange }) => {
  return (
    <Editor name="Lilypond" onChange={onLilypondChange} />
  )
}

LilypondEditor.propTypes = {
  onLilypondChange: PropTypes.func.isRequired,
}

export default LilypondEditor
