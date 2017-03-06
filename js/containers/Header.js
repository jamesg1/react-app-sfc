import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { setSearchTerm } from '../actions'
import { Link } from 'react-router'
const { func, bool, string } = React.PropTypes
import FlatButton from 'material-ui/FlatButton'

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
      utilSpace = <input type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTermChange} />
    } else {
      utilSpace = (
        <Link to='/'>
          <FlatButton label='Back' />
        </Link>
      )
    }
    return (
      <AppBar
        title={<Link to='/'>Home</Link>}
        onTitleTouchTap={handleTouchTap}
        iconElementRight={utilSpace}
        showMenuIconButton={false}
      />
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
