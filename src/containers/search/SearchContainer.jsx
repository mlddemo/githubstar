import React from 'react'
import { connect } from 'react-redux'

import Search from '../../components/search/Search'

export class PureSearchContainer extends React.Component {
    render() {
        return <Search {...this.props} />
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state.repos,
    ownProps
})

export default connect(
    mapStateToProps,
)(PureSearchContainer)
