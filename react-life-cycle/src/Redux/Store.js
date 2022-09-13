import { createStore } from "redux";
import RootReducers from "./reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(RootReducers, composeWithDevTools())

export default store