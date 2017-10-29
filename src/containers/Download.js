import { connect } from 'react-redux'
import DownloadButton from '../components/DownloadButton'

const mapStateToProps = state => {
  return {
    isDownloadable: state.isOk,
  }
}

const Download = connect(
  mapStateToProps
)(DownloadButton)

export default Download
