export default {
  namespace: 'name',
  state: {
    hhh: '999'
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        user: 'user2'
      }
    }
  }
}