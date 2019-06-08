import React from 'react'

import Result from './Result'

const renderResults = repos => {
    return repos.map(repo =>
        <Result repo={repo} key={`Result:${repo.full_name}`} />
    )
}

const Search = props => (
    <div>{renderResults(props.repos)}</div>
)

export default Search
