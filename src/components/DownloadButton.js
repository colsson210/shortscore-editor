import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
const DownloadButton = ({ isDownloadable }) => {
  return (
    <ButtonToolbar>
      <Button className="btn-primary" href="http://localhost:5000/download/" disabled={!isDownloadable}>Download</Button>
    </ButtonToolbar>
  )
}


DownloadButton.propTypes = {
  isDownloadable: PropTypes.bool.isRequired,
}

export default DownloadButton
