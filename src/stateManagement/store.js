import { createStore } from "redux";
import reducer from './reducers/reducer'

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState(), 'store has been changed'))

export default store