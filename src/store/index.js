import { createBrowserHistory } from 'history'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './rootReducer'
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory()

export default function configureStore() {
    return createStore(
        createRootReducer(history),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk)
        )
    )
}
