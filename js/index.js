import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import App from './containers/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
