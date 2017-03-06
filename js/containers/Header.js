import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { setSearchTerm } from '../actions'
const { func, bool, string } = React.PropTypes
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import {white} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    textColor: white
  },
  floatingLabelStyle: {
    color: white
  },
  floatingLabelFocusStyle: {
    color: white
  },
  underlineStyle: {
    color: white
  }
})

function handleTouchTap () {
  console.log('onTouchTap triggered on the title component')
}

const Header = React.createClass({
  propTypes: {
    showSearch: bool,
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <TextField
        hintText={this.props.searchTerm}
        floatingLabelText='Search'
        labelStyle={{ color: 'white' }}
        value={this.props.searchTerm}
        onChange={this.handleSearchTermChange}
      />
    } else {
      utilSpace = (
        <FlatButton label='Back' />
      )
    }
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title='Home'
          onTitleTouchTap={handleTouchTap}
          iconElementRight={utilSpace}
          showMenuIconButton={false}
        />
      </MuiThemeProvider>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
