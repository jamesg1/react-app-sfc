import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from '../actions'
import { Link } from 'react-router'
const { func, bool, string } = React.PropTypes

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
        <h2 className='header-back'>
          <Link to='/'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
