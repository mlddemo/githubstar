import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'

import { GITHUB_SEARCH_REPOS_BASE } from '../../../constants'
import * as actions from '../../../actions/github/actions'
import * as types from '../../../actions/github/actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('github fetch repos action', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('dispatches FETCH_REPOS_SUCCESS when fetching repos completes successfully', () => {
        const expected = { repos: [] }
        const expectedActions = [
            { type: types.FETCH_REPOS_REQUEST },
            { type: types.FETCH_REPOS_SUCCESS, body: expected }
        ]
        
        fetchMock.getOnce(`begin:${GITHUB_SEARCH_REPOS_BASE}`, {
            body: expected,
            headers: { 'content-type': 'application/json' }
        })

        const store = mockStore({ repos: [] })

        return store.dispatch(actions.fetchRepos()).then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions)
        })
    })

    it('dispatches FETCH_REPOS_FAILURE when fetching repos produces an error', () => {
        const expected = new Error('bad request')
        const expectedActions = [
            { type: types.FETCH_REPOS_REQUEST },
            { type: types.FETCH_REPOS_FAILURE, error: expected }
        ]
        
        fetchMock.getOnce(`begin:${GITHUB_SEARCH_REPOS_BASE}`, {
            throws: expected
        })

        const store = mockStore({ repos: [] })

        return store.dispatch(actions.fetchRepos()).then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions)
        })
    })
})
