import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import repos from './reducers/repos'

export default history => combineReducers({
    router: connectRouter(history),
    repos
})
