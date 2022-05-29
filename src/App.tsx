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
import {RootStateType} from "./Redux/state";
import Friends from "./components/Friends/Friends";

type PropsType = { // !!!!!!!!!!!
    state: RootStateType
}

const App = (props: PropsType) => {
// const App = ({ state }: {state: RootStateType}) => {
    console.log(props.state.sideBar.friends)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsData={props.state.dialogPage.dialogsData}
                               messagesData={props.state.dialogPage.messagesData}/>}/>
                    <Route path='/profile' render={() => <Profile postData={props.state.profilePage.postData}/>}/>
                    <Route path='/Friends' render={() => <Friends friends={props.state.sideBar.friends}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/music' component={() => <Music/>}/>
                    <Route path='/setting' component={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;