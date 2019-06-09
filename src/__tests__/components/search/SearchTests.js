import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { shallow, configure } from 'enzyme'

import Search from '../../../components/search/Search'

describe('Search', () => {
    let props

    const shallowRender = () => shallow(<Search {...props} />)

    beforeEach(() => {
        configure({ adapter: new Adapter() });

        props = {
            language: 'python',
            created: '2019-05-14',
            repos: [{
                full_name: 'angular/angular.js'
            }, {
                full_name: 'emberjs/ember.js'
            }]
        }
    })

    it('should render a Result for each repo', () => {
        const div = shallowRender().find('.results')
        const children = div.find('Result')

        expect(div).to.have.length(1)
        expect(children).to.have.length(props.repos.length)
        children.forEach((child, idx) => {
            expect(child.props().repo).to.deep.equal(props.repos[idx])
        })
    })

    it('should render the search criteria', () => {
        const expected = {
            language: 'python',
            created: '2019-05-14'
        }
        
        const criteria = shallowRender().find('Criteria')

        expect(criteria).to.have.length(1)
        expect(criteria.props()).to.deep.equal(expected)
    })
    
    it('should render a loading spinner if search is in progress', () => {
        props.isFetching = true

        const div = shallowRender().find('.results')
        const results = div.find('Result')
        const loading = div.find('.loading')
        
        expect(results).to.have.length(0)
        expect(loading).to.have.length(1)
    })
})
