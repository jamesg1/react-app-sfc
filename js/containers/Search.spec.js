import React from 'react'
import { Provider } from 'react-redux'
import { shallow, render } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import store from '../store/configureStore'
import { setSearchTerm } from '../actions'
import Search, { Unwrapped as UnwrappedSearch } from './Search'
import ShowCard from '../components/ShowCard'
import preload from '../../public/data.json'

test('Search render correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  expect(preload.shows.length).toEqual(component.find(ShowCard).length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  store.dispatch(setSearchTerm(searchWord))
  const component = render(<Provider store={store}><Search shows={preload.shows} /></Provider>)
  const showCount = preload.shows.filter((show) => `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(searchWord.toUpperCase())).length
  expect(showCount).toEqual(component.find('.show-card').length)
})
