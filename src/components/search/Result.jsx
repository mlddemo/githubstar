import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
 
library.add(faStar)

const Result = props => (
    <Card>
        <Card.Body>
            <Card.Title><a className='full_name' target='_new' href={props.repo.html_url}>{props.repo.full_name}</a></Card.Title>
            <Card.Text className='description'>{props.repo.description}</Card.Text>
        </Card.Body>
        <Card.Body>
            <Container>
                <Row>
                    <Col>
                        <i className='created'>{`Created ${moment(props.repo.created_at).format('Do MMMM YYYY')}`}</i>
                    </Col>
                    <Col>
                    <FontAwesomeIcon icon="star" /> <span className='stars'>{props.repo.stargazers_count}</span>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
)

export default Result
