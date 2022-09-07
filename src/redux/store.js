import {createStore} from "redux";
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);
console.log(store.getState());
export default store;