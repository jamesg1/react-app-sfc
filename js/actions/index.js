import axios from 'axios'

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const ADD_OMDB_DATA = 'ADD_OMDB_DATA'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then((response) => {
        dispatch(addOMDBData(imdbID, response.data))
      })
      .catch((error) => {
        console.error('axios error', error)
      })
  }
}
