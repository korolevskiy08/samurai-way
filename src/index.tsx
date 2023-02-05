import React from 'react'
import './index.css'
import store from './Redux/redux-store'
import ReactDOM from 'react-dom'
import SamurajJSApp from './App'

let rerenderEntireTree = () => {
    ReactDOM.render(
                <SamurajJSApp/>,
        document.getElementById('root')
    )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
