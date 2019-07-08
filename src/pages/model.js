import { routerRedux } from 'dva'
import { query } from '../service/asd'

export default {
  namespace: 'indexPage',
  state: {
    list: []
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      let res = yield call(query)
      console.log(res)
      if(res.status === 200) {
        yield put({
          type: 'save',
          payload: res.data
        })
      }
    },
    *jump({ payload }, { call, put }) {
      yield put(routerRedux.push({
        pathname: 'user',
        name: payload
      }))
    }
  },
  reducers: {
    save(state, { payload }) {
      return { 
        ...state,
        list: payload
      };
    },
  }
}