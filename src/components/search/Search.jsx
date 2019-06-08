import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import Result from './Result'
import Criteria from './Criteria'

const MarginRow = styled(Row)`
    margin 24px 0;
`

const renderResults = repos => {
    return repos.map(repo =>
        <MarginRow key={`Result:${repo.full_name}`}>
            <Col md={{ span: 6, offset: 3 }} >
                <Result repo={repo} />
            </Col>
        </MarginRow>
    )
}

const Search = props => (
    <Container>
        <MarginRow>
            <Col md={{ span: 6, offset: 3 }}>
                <Criteria language={props.language} created={props.created} />
            </Col>
        </MarginRow>
        <div className='results'>{renderResults(props.repos)}</div>
    </Container>
)

export default Search
