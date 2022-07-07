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
import {StoreType} from "./Redux/state";

type PropsType = { // !!!!!!!!!!!
    store: StoreType
    dispatch: (action: addPostActionCreatorType | addMessageActionCreatorType) => void
}


const App:React.FC<PropsType> = (props) =>{

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsData={props.store._state.dialogPage.dialogsData}
                               messagesData={props.store._state.dialogPage.messagesData}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path='/profile' render={() => <Profile postData={props.store._state.profilePage.postData}
                                                                  dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/Friends' render={() => <Friends friends={props.store._state.sideBar.friends}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/music' component={() => <Music/>}/>
                    <Route path='/setting' component={() => <Setting/>}/>
                </div>
            </div>
            </BrowserRouter>
    );
}

export default App;