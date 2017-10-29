import React from 'react'
import PropTypes from 'prop-types'

import Editor from './Editor'

const ShortscoreEditor = ({ onShortscoreChange }) => {
  return (
    <Editor name="Shortscore" onChange={onShortscoreChange} />
  )
}

ShortscoreEditor.propTypes = {
  onShortscoreChange: PropTypes.func.isRequired,
}

export default ShortscoreEditor
