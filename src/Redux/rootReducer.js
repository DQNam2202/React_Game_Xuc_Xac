import {combineReducers, createStore} from 'redux'

import BaiTapXucXacReducer from './BaiTapXucXacReducer'

// Tập hợp các reducer con lại để cho App quản lý
const rootReducer = combineReducers({
    BaiTapXucXacReducer
})

const store = createStore(rootReducer);

export default store;