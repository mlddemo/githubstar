import {
    GITHUB_SEARCH_REPOS_BASE as GITHUB_SEARCH_REPOS_BASE
} from '../../constants'
import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE
} from './actionTypes'

const fetchReposRequest = () => {
    return {
        type: FETCH_REPOS_REQUEST
    }
}

const fetchReposSuccess = body => {
    return {
        type: FETCH_REPOS_SUCCESS,
        body
    }
}

const fetchReposFailure = error => {
    return {
        type: FETCH_REPOS_FAILURE,
        error
    }
}

export const fetchRepos = () => {
    return async dispatch => {
        dispatch(fetchReposRequest())
        try {
            const response = await fetch(GITHUB_SEARCH_REPOS_BASE)
            const body = await response.json()
            dispatch(fetchReposSuccess(body))
        } catch (error) {
            dispatch(fetchReposFailure(error))
        }
    }
}
