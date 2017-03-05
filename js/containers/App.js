import React from 'react'
import { Match, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import Search from './Search'
import Details from './details'
import preload from '../../public/data.json'

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match exactly pattern='/' component={(props) => <Search shows={preload.shows} {...props} />} />
        <Redirect from='/search/*' to='/' />
        <Match pattern='/details/:id' component={(props) => {
          const show = preload.shows.filter((show) => props.params.id === show.imdbID)
          return <Details show={show[0]} {...props} />
        }} />
      </div>
    </Provider>
  )
}

export default App