import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

export default (preloaderState) => {
    return createStore(
        reducer(history),
        preloaderState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}