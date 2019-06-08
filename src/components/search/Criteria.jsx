import React from 'react'

const Criteria = props => (
    <div>
        <div className='language'>{`Most Stars for '${props.language}'`}</div>
        {props.created &&
            <div className='created'>{`Repos created since ${props.created.format('Do MMMM YYYY')}`}</div>}
    </div>
)

export default Criteria
