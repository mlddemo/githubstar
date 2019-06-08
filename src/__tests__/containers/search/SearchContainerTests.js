import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallow, configure } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import SearchContainer, { PureSearchContainer } from '../../../containers/search/SearchContainer'
const expect = chai.expect
chai.use(sinonChai)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('SearchContainer', () => {
    let props
    let dispatch

    const shallowRender = () => shallow(<PureSearchContainer dispatch={() => { }} {...props} />)
    const shallowWithStore = store => {
        dispatch = sinon.spy()
        return shallow(<SearchContainer {...props} store={store} dispatch={dispatch} />);
    };

    beforeEach(() => {
        configure({ adapter: new Adapter() });

        props = {}
    })

    it('should render Search component', () => {
        const container = shallowRender()
        const component = container.find('Search')

        expect(component).to.have.length(1)
    })

    it('should correctly map store to props', () => {
        const store = mockStore({
            repos: {
                repos: [{
                    full_name: 'foo'
                }, {
                    full_name: 'bar'
                }]
            }
        })
        const container = shallowWithStore(store)
        expect(container.prop()).to.deep.equal(store.repos)
    })

    it('should fetch repos on when mounted', () => {
        const fetchRepos = sinon.spy()
        shallow(<PureSearchContainer {...props} fetchRepos={fetchRepos} />)
        
        expect(fetchRepos).to.have.been.called
    })
})
