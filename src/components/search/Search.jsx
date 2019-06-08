import React from 'react'

import Result from './Result'
import Criteria from './Criteria'

const renderResults = repos => {
    return repos.map(repo =>
        <Result repo={repo} key={`Result:${repo.full_name}`} />
    )
}

const Search = props => (
    <>
        <Criteria language={props.language} />
        <div className='results'>{renderResults(props.repos)}</div>
    </>
)

export default Search
