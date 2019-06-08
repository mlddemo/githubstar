import React from 'react'
import { Route } from 'react-router'
import './App.css'

import SearchContainer from './containers/search/SearchContainer'
import FetchContainer from './containers/search/FetchContainer'

function App() {
    return (
        <div className="App">
            <Route path={'/:language?'} component={FetchContainer} />
            <SearchContainer />
        </div>
    );
}

export default App
