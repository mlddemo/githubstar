import React from 'react'
import { connect } from 'react-redux'

import {
    fetchRepos
} from '../../actions/github/actions'

export class PureFetchContainer extends React.Component {
    componentDidMount() {
        const {
            fetchRepos,
            language
        } = this.props
        
        if (fetchRepos) {
            fetchRepos(language)
        }
    }

    render() {
        return <></>
    }
}

const mapStateToProps = (_, ownProps) => {
    const language = ownProps.match 
        && ownProps.match.params
        && ownProps.match.params.language
    return {
        language
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRepos: language => dispatch(fetchRepos(language))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PureFetchContainer)
