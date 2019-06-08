import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { shallow, configure } from 'enzyme'

import Criteria from '../../../components/search/Criteria'

describe('Criteria', () => {
    let props

    const shallowRender = () => shallow(<Criteria {...props} />)

    beforeEach(() => {
        configure({ adapter: new Adapter() });

        props = {
            language: 'javascript',
            created: '2019-05-14'
        }
    })

    it('should render search language', () => {
        const div = shallowRender().find('.language')
        expect(div).to.have.length(1)
        expect(div.text()).to.be.equal('Most Stars for \'javascript\'')
    })

    it('should render search created date', () => {
        const div = shallowRender().find('.created')
        expect(div).to.have.length(1)
        expect(div.text()).to.be.equal(`Repos created since ${props.created}`)
    })
})