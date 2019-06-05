import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import dummy from './reducers/dummy'

export default history => combineReducers({
    router: connectRouter(history),
    dummy
})
