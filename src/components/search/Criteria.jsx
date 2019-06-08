import React from 'react'

const Criteria = props => (
    <div>
        <h1 className='language'>{`Most Stars for '${props.language}'`}</h1>
        {props.created &&
            <i className='created'>{`Repos created since ${props.created.format('Do MMMM YYYY')}`}</i>}
    </div>
)

export default Criteria
