import { createStore } from "redux";
import reducer from './reducers/reducer'

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState(), 'store has been subscribed/changed'))

export default store