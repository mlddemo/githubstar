import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { shallow, configure } from 'enzyme'

import Result from '../../../components/search/Result'

describe('Result', () => {
    let props

    const shallowRender = () => shallow(<Result {...props} />)

    beforeEach(() => {
        configure({ adapter: new Adapter() });

        props = {
            repo: {
                full_name: 'angular/angular.js'
            }
        }
    })

    it('should render full name', () => {
        const title = shallowRender().find('Card')
        expect(title).to.have.length(1)
        expect(title.text()).to.be.equal(props.repo.full_name)
    })
})