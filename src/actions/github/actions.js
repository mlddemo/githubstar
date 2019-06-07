import {
    GITHUB_SEARCH_REPOS_BASE,
    DEFAULT_LANGUAGE
} from '../../constants'
import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE
} from './actionTypes'

const fetchReposRequest = language => {
    return {
        type: FETCH_REPOS_REQUEST,
        language
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

const buildQuery = language => {
    return `${GITHUB_SEARCH_REPOS_BASE}?q=language:${language}`
}

export const fetchRepos = language => {
    return async dispatch => {
        if (!language) {
            language = DEFAULT_LANGUAGE
        }
        dispatch(fetchReposRequest(language))
        try {
            const response = await fetch(buildQuery(language))
            const body = await response.json()
            dispatch(fetchReposSuccess(body))
        } catch (error) {
            dispatch(fetchReposFailure(error))
        }
    }
}
