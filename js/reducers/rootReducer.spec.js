import reducers from './rootReducer'

test('@@INIT', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({"searchTerm":"","omdbData":{}});
});

test('SET_SEARCH_STATE', () => {
  let state
  state = reducers({searchTerm:''}, {type:'SET_SEARCH_TERM',searchTerm:'football'})
  expect(state).toEqual({searchTerm:'football'})
})
