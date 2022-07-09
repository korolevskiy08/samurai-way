import React from 'react';
import './index.css';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from "./store.context";

let rerenderEntireTree = () => {

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App
            // store={store} dispatch={store.dispatch.bind(store)}
        />
    </StoreContext.Provider>,
    document.getElementById('root')
);
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)


