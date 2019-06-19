export default {
  namespace: 'user',
  state: {
    name: 'name'
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        name: 'save'
      }
    }
  }
}