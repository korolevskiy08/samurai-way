import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Settings/Setting";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/Dialogs.container";
import { UsersComponent } from './components/Users/UsersComponent';
import { UsersContainer } from './components/Users/UsersContainer';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() =>
                               <DialogsContainer
                           />}/>
                    <Route path='/Profile' render={() => <Profile
                    />}/>
                    <Route path='/Friends' render={() => <Friends
                    />}/>
                   <Route path='/Users' render={() => <UsersContainer
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