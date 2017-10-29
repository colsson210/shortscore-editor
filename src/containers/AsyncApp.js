import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import {
  fetchCheck,
  setLilypond,
  setShortscore,
} from '../actions'
import DownloadButton from '../components/DownloadButton'
import LilypondEditor from '../components/LilypondEditor'
import ShortscoreEditor from '../components/ShortscoreEditor'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.onLilypondChange = this.onLilypondChange.bind(this)
    this.onShortscoreChange = this.onShortscoreChange.bind(this)
  }

  check({lilypond, shortscore}) {
    const { dispatch } = this.props
    dispatch(fetchCheck({lilypond, shortscore}))
  }

  onLilypondChange(lilypond) {
    const { dispatch, shortscore } = this.props
    dispatch(setLilypond(lilypond))
    this.check({lilypond, shortscore})
  }

  onShortscoreChange(shortscore) {
    const { dispatch, lilypond } = this.props
    dispatch(setShortscore(shortscore))
    this.check({lilypond, shortscore})
  }

  render() {
    const { isDownloadable, isValidLilypond, isValidShortscore } = this.props
    return (
      <Grid>
        <DownloadButton isDownloadable={isDownloadable} />
        <ShortscoreEditor isValidShortscore={isValidShortscore} onShortscoreChange={this.onShortscoreChange} />
        <LilypondEditor isValidLilypond={isValidLilypond} onLilypondChange={this.onLilypondChange} />
      </Grid>
    )
  }
}

AsyncApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lilypond: PropTypes.string.isRequired,
  isDownloadable: PropTypes.bool.isRequired,
  isValidLilypond: PropTypes.bool.isRequired,
  isValidShortscore: PropTypes.bool.isRequired,
  shortscore: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    lilypond: state.lilypond,
    isDownloadable: state.isOk,
    isValidLilypond: state.lilypond.length > 2,
    isValidShortscore: state.shortscore.length < 3,
    shortscore: state.shortscore,
  }
}

export default connect(mapStateToProps)(AsyncApp)
