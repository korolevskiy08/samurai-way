import React from 'react';
import './index.css';
import {store} from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = () => {

    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} addNewMessage={store.addNewMessage.bind(store)}/>,
        document.getElementById('root')
    );

}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)


