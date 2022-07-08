import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Settings/Setting";

import Friends from "./components/Friends/Friends";
import {addPostActionCreatorType} from "./Redux/profile-reducer";
import {addMessageActionCreatorType} from "./Redux/dialog-reducer";

type PropsType = { // !!!!!!!!!!!
    store: any
    dispatch: (action: addPostActionCreatorType | addMessageActionCreatorType) => void
}

const App:React.FC<PropsType> = (props) =>{
    console.log(props)
    let state = props.store.getState()

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsData={state.dialogPage.dialogsData}
                               messagesData={state.dialogPage.messagesData}
                               dispatch={props.dispatch.bind(props.store)}
                           />}/>
                    <Route path='/profile' render={() => <Profile postData={state.profilePage.postData}
                                                                  dispatch={props.dispatch.bind(props.store)}/>}/>
                    <Route path='/Friends' render={() => <Friends friends={state.sideBar.friends}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/music' component={() => <Music/>}/>
                    <Route path='/setting' component={() => <Setting/>}/>
                </div>
            </div>
            </BrowserRouter>
    );
}

export default App;