import React from 'react'

const Criteria = props => (
    <div>
        <div className='language'>{`Most Stars for '${props.language}'`}</div>
        <div className='created'>{`Repos created since ${props.created}`}</div>
    </div>
)

export default Criteria
