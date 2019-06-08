import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { shallow, configure } from 'enzyme'
import moment from 'moment'

import Result from '../../../components/search/Result'

describe('Result', () => {
    let props

    const shallowRender = () => shallow(<Result {...props} />)

    beforeEach(() => {
        configure({ adapter: new Adapter() });

        props = {
            repo: {
                full_name: 'nodejs/node',
                html_url: 'https://github.com/nodejs/node',
                description: 'Node.js JavaScript runti…rtle::rocket::sparkles:',
                created_at: '2014-11-26T19:57:11Z',
                stargazers_count: 61911
            }
        }
    })

    it('should render full name as a link', () => {
        const title = shallowRender().find('.full_name')
        expect(title).to.have.length(1)
        expect(title.text()).to.be.equal(props.repo.full_name)
        expect(title.prop('href')).to.be.equal(props.repo.html_url)
    })

    it('should render description', () => {
        const description = shallowRender().find('.description')
        expect(description).to.have.length(1)
        expect(description.text()).to.be.equal(props.repo.description)
    })

    it('should render created date', () => {
        const created = shallowRender().find('.created')
        expect(created).to.have.length(1)
        expect(created.text()).to.be.equal('Created 26th November 2014')
    })

    it('should render stargazer count', () => {
        const stars = shallowRender().find('.stars')
        expect(stars).to.have.length(1)
        expect(stars.text()).to.be.equal(`*${props.repo.stargazers_count}`)
    })
})