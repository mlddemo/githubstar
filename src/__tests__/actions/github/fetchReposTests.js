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

    it('should dispatch FETCH_REPOS_SUCCESS when fetching repos completes successfully', async () => {
        const expected = { repos: [] }
        const expectedActions = [
            { type: types.FETCH_REPOS_REQUEST, language: 'java' },
            { type: types.FETCH_REPOS_SUCCESS, body: expected }
        ]

        fetchMock.getOnce(`begin:${GITHUB_SEARCH_REPOS_BASE}`, {
            body: expected,
            headers: { 'content-type': 'application/json' }
        })

        const store = mockStore({ repos: [] })

        await store.dispatch(actions.fetchRepos('java'))

        expect(store.getActions()).to.deep.equal(expectedActions)
    })

    it('should dispatch FETCH_REPOS_FAILURE when fetching repos produces an error', async () => {
        const expected = new Error('bad request')
        const expectedActions = [
            { type: types.FETCH_REPOS_REQUEST, language: 'java' },
            { type: types.FETCH_REPOS_FAILURE, error: expected }
        ]

        fetchMock.getOnce(`begin:${GITHUB_SEARCH_REPOS_BASE}`, {
            throws: expected
        })

        const store = mockStore({ repos: [] })

        await store.dispatch(actions.fetchRepos('java'))

        expect(store.getActions()).to.deep.equal(expectedActions)
    })

    it('should default language to javascript is not specified', async () => {
        const expected = { repos: [] }
        const expectedActions = [
            { type: types.FETCH_REPOS_REQUEST, language: 'javascript' },
            { type: types.FETCH_REPOS_SUCCESS, body: expected }
        ]

        fetchMock.getOnce(`begin:${GITHUB_SEARCH_REPOS_BASE}`, {
            body: expected,
            headers: { 'content-type': 'application/json' }
        })

        const store = mockStore({ repos: [] })

        await store.dispatch(actions.fetchRepos())

        expect(store.getActions()).to.deep.equal(expectedActions)
    })

    it('should specify language in github request params', async () => {
        const expected = 'pascal'

        fetchMock.getOnce('*', {
            body: {},
            headers: { 'content-type': 'application/json' }
        })

        const store = mockStore({ repos: [] })

        await store.dispatch(actions.fetchRepos(expected))

        expect(
            fetchMock.called(`begin:${GITHUB_SEARCH_REPOS_BASE}?q=language:${expected}`)
        ).to.be.true
    })
})
