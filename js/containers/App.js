import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import Search from './Search'
import Details from './details'
import preload from '../../public/data.json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <div className='app'>
          <Match exactly pattern='/' component={(props) => <Search shows={preload.shows} {...props} />} />
          <Match pattern='/details/:id' component={(props) => {
            const show = preload.shows.filter((show) => props.params.id === show.imdbID)
            return <Details show={show[0]} {...props} />
          }} />
        </div>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
