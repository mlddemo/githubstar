import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallow, configure } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import FetchContainer, { PureFetchContainer } from '../../../containers/search/FetchContainer'
const expect = chai.expect
chai.use(sinonChai)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('FetchContainer', () => {
    let props
    let dispatch

    const shallowRender = () => shallow(<PureFetchContainer dispatch={() => { }} {...props} />)
    const shallowWithStore = store => {
        dispatch = sinon.spy()
        return shallow(<FetchContainer {...props} store={store} dispatch={dispatch} />);
    };

    beforeEach(() => {
        configure({ adapter: new Adapter() });

        props = {}
    })

    it('should correctly map store to props', () => {
        const store = mockStore({
            repos: {
                language: 'python'
            }
        })
        const container = shallowWithStore(store)
        expect(container.prop()).to.deep.equal(store.repos)
    })

    it('should dispatch fetch repos action with correct language', () => {
        const expected = 'csharp'

        const fetchRepos = sinon.spy()
        props.fetchRepos = fetchRepos
        props.language = expected
        
        shallowRender()

        expect(fetchRepos).to.have.been.calledWith(expected)
    })
})
