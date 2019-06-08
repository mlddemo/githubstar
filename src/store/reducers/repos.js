import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
} from '../../actions/github/actionTypes'

const initialState = {
    repos: [],
    isFetching: false,
    error: null,
    language: 'javascript',
    created: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPOS_REQUEST:
            return {
                ...state,
                repos: [],
                isFetching: true,
                error: null,
                language: action.language,
                created: action.created
            }
        case FETCH_REPOS_SUCCESS:
            return {
                ...state,
                repos: action.body.items.map(item => ({
                    full_name: item.full_name,
                    description: item.description,
                    html_url: item.html_url,
                    stargazers_count: item.stargazers_count,
                    created_at: item.created_at
                })),
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
