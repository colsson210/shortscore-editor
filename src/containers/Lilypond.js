import { connect } from 'react-redux'
import { setLilypond } from '../actions'
import LilypondEditor from '../components/LilypondEditor'

const mapStateToProps = state => {
  return {
    lilypond: state.lilypond,
    isValidLilypond: state.lilypond.length < 3,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLilypondChange: lilypond => {
      dispatch(setLilypond(lilypond))
    }
  }
}

const Lilypond = connect(
  mapStateToProps,
  mapDispatchToProps
)(LilypondEditor)

export default Lilypond
