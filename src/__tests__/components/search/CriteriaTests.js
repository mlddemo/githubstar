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
            language: 'javascript'
        }
    })

    it('should render search language', () => {
        const div = shallowRender().find('div')
        expect(div).to.have.length(1)
        expect(div.text()).to.be.equal('Most Stars for \'javascript\'')
    })
})