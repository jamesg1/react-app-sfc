import React from 'react'
import { Link } from 'react-router'
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
  underlineStyle: {
    borderColor: white
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
        id='search__field'
        hintText={this.props.searchTerm}
        value={this.props.searchTerm}
        underlineShow
        onChange={this.handleSearchTermChange}
        underlineStyle={muiTheme.underlineStyle}
        underlineFocusStyle={muiTheme.underlineStyle}

      />
    } else {
      utilSpace = (
        <FlatButton
          primary
          style={{
            backgroundColor: 'rgb(255, 255, 255)'
          }}>
          <Link to='/'
            style={{
              'display': 'block',
              color: 'rgba(0, 0, 0, 0.870588)',
              'textDecoration': 'none'
            }}>Back</Link>
        </FlatButton>
      )
    }
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title='The Cove Chants'
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
