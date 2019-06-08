import { expect } from 'chai'

import reducer from '../../../store/reducers/repos'
import * as types from '../../../actions/github/actionTypes'

describe('repos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to.deep.equal({
            repos: [],
            isFetching: false,
            error: null,
            language: 'javascript',
            created: null
        })
    })

    it('should handle FETCH_REPOS_REQUEST by clearing state and setting isFetching to true', () => {
        const unexpected = {
            repos: [{}, {}],
            isFetching: false,
            error: {},
            language: 'javascript',
            created: null
        }
        const expected = {
            repos: [],
            isFetching: true,
            error: null,
            language: 'csharp',
            created: '2019-05-14'
        }

        expect(
            reducer(unexpected, {
                type: types.FETCH_REPOS_REQUEST,
                language: 'csharp',
                created: '2019-05-14'
            })
        ).to.deep.equal(expected)
    })

    it('should handle FETCH_REPOS_SUCCESS by mapping repos and clearing isFetching', () => {
        const unexpected = {
            repos: [],
            isFetching: true,
            error: {}
        }
        const repo = {
            full_name: 'angular/angular.js',
            description: 'AngularJS - HTML enhanced for web apps!',
            url: 'https://api.github.com/repos/angular/angular.js',
            stargazers_count: 59567,
            created_at: '2010-01-06T00:34:37Z'
        }
        const expected = {
            repos: [repo],
            isFetching: false,
            error: null
        }

        expect(
            reducer(unexpected, {
                type: types.FETCH_REPOS_SUCCESS,
                body: {
                    items: [{
                        full_name: repo.full_name,
                        description: repo.description,
                        url: repo.url,
                        stargazers_count: repo.stargazers_count,
                        created_at: repo.created_at
                    }]
                }
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
