import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE
} from '../../actions/github/actionTypes'

const initialState = {
    repos: [],
    isFetching: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPOS_REQUEST:
            return {
                ...state,
                repos: [],
                isFetching: true,
                error: null
            }
        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                repos: action.body,
                isFetching: false,
                error: null
            }
        case FETCH_REPOS_FAILURE:
            return {
                ...state,
                repos: [],
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
} 

export default reducer
