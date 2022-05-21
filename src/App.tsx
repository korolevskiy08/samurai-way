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


const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs />} />
                    <Route path='/profile' render={ () => <Profile />} />
                    <Route path='/News' render={ () => <News />} />
                    <Route path='/music' component={ () => <Music />} />
                    <Route path='/setting' component={() => <Setting />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;