import { connect } from 'react-redux'
import { setShortscore } from '../actions'
import ShortscoreEditor from '../components/ShortscoreEditor'

const mapStateToProps = state => {
  // validShortscore = shortScoreServer.checkSyntax(text)
  // validShortscoreLilypondCombination = shortScoreServer.check
  return {
    shortscore: state.shortscore,
    isValidShortscore: state.shortscore.length > 2,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShortscoreChange: shortscore => {
      dispatch(setShortscore(shortscore))
    }
  }
}

const Shortscore = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortscoreEditor)

export default Shortscore
