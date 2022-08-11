import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Settings/Setting";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/Dialogs.container";
import {UsersComponent} from './components/Users/UsersContainer';
import {ProfileComponent} from "./components/Profile/ProfileConteiner";
import HeaderContainer from './components/Header/HeaderContainer';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() =>
                               <DialogsContainer
                               />}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileComponent
                    />}/>
                    <Route path='/Friends' render={() => <Friends
                    />}/>
                    <Route path='/Users' render={() => <UsersComponent
                    />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' component={() => <Music/>}/>
                    <Route path='/Setting' component={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;