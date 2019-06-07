import { expect } from 'chai'

import reducer from '../../../store/reducers/repos'
import * as types from '../../../actions/github/actionTypes'

describe('repos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to.deep.equal({
            repos: [],
            isFetching: false,
            error: null
        })
    })

    it('should handle FETCH_REPOS_REQUEST by clearing state and setting isFetching to true', () => {
        const unexpected = {
            repos: [{}, {}],
            isFetching: false,
            error: {}
        }
        const expected = {
            repos: [],
            isFetching: true,
            error: null
        }

        expect(
            reducer(unexpected, {
                type: types.FETCH_REPOS_REQUEST
            })
        ).to.deep.equal(expected)
    })

    it('should handle FETCH_REPOS_SUCCESS by settings repos and clearing isFetching', () => {
        const unexpected = {
            repos: [],
            isFetching: true,
            error: {}
        }
        const expected = {
            repos: [{ foo: 'bar' }, {}, {}],
            isFetching: false,
            error: null
        }

        expect(
            reducer(unexpected, {
                type: types.FETCH_REPOS_SUCCESS,
                body: expected.repos
            })
        ).to.deep.equal(expected)
    })

    it('should handle FETCH_REPOS_FAILURE by clearing state and setting error', () => {
        const unexpected = {
            repos: [{}, {}],
            isFetching: true,
            error: null
        }
        const expected = {
            repos: [],
            isFetching: false,
            error: { message: 'foo' }
        }

        expect(
            reducer(unexpected, {
                type: types.FETCH_REPOS_FAILURE,
                error: expected.error
            })
        ).to.deep.equal(expected)
    })
})
