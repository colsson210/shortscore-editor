import React from 'react'
import PropTypes from 'prop-types'

import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'

import './Editor.css'

const Editor = ({ name, onChange }) => {
  return (
    <FormGroup>
      <ControlLabel>{name}</ControlLabel>
      <FormControl componentClass="textarea" onChange={(event) => {onChange(event.target.value);}} />
    </FormGroup>
  )
}


Editor.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Editor
