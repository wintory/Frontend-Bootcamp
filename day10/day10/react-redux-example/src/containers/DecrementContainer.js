import { connect } from 'react-redux'
import { decrementBy } from '../actions/counter';
import DecrementButton from '../components/DecrementButton'

const mapDispatchToProps = {
    decrementBy
}

export default connect(null, mapDispatchToProps)(DecrementButton)