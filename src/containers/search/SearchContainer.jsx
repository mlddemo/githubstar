import React from 'react'
import { connect } from 'react-redux'

import { fetchRepos } from '../../actions/github/actions'
import Search from '../../components/search/Search'

export class PureSearchContainer extends React.Component {
    componentDidMount() {
        const { fetchRepos } = this.props
        if (fetchRepos) {
            this.props.fetchRepos()
        }
    }

    render() {
        return <Search {...this.props} />
    }
}

const mapStateToProps = state => ({
    ...state.repos
})

const mapDispatchToProps = dispatch => ({
    fetchRepos: () => dispatch(fetchRepos())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PureSearchContainer)
