import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

import Result from './Result'
import Criteria from './Criteria'

const MarginRow = styled(Row)`
    margin: 24px 0;
`

const CentreDiv = styled.div`
    display: flex;
    justify-content: center;
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

const renderLoading = () => (
    <CentreDiv className='loading'>
        <ReactLoading type={'spin'} color={'#212529'} />
    </CentreDiv>
)

const renderError = message => {
    return <div className='error'>{message}</div>
}

const renderSearch = props => {
    if (props.error) {
        return renderError(props.error.message)
    }

    return <div className='results'>
        {props.isFetching
            ? renderLoading()
            : renderResults(props.repos)}
    </div>
}

const Search = props => (
    <Container>
        <MarginRow>
            <Col md={{ span: 6, offset: 3 }}>
                <Criteria language={props.language} created={props.created} />
            </Col>
        </MarginRow>
        {renderSearch(props)}
    </Container>
)

export default Search
