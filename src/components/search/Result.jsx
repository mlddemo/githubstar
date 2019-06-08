import React from 'react'
import { Card } from 'react-bootstrap'

const Result = props => (
    <Card>
        <Card.Body>
            <Card.Title>{props.repo.full_name}</Card.Title>
        </Card.Body>
    </Card>
)

export default Result
