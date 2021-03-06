import { createStore } from "redux";
import reducer from './reducers/reducer'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log(store.getState(), 'store has been changed'))

export default store