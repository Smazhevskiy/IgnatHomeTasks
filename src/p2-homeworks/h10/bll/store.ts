import {combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'


const rootReducer = combineReducers({
    loading: loadingReducer,

})

const store = createStore(rootReducer)

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev
