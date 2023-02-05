import React, {FC} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import Music from './components/Music/Music'
import News from './components/News/News'
import Setting from './components/Settings/Setting'
import Friends from './components/Friends/Friends'
import DialogsContainer from './components/Dialogs/Dialogs.container'
import {UsersComponent} from './components/Users/UsersContainer'
import {ProfileComponent} from './components/Profile/ProfileConteiner'
import HeaderContainer from './components/Header/HeaderContainer'
import {LoginContainer} from './components/Login/Login'
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store, {AppDispatch, RootState} from "./Redux/redux-store";
import {initializeApp} from "./Redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapDispatchToPropsType = {
    initializeAppThunk: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

type AppType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeAppThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/Profile/:userId?" render={() => <ProfileComponent/>}/>
                    <Route path="/Friends" render={() => <Friends/>}/>
                    <Route path="/Users" render={() => <UsersComponent/>}/>
                    <Route path="/News" render={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Setting" component={Setting}/>
                    <Route path="/Login" render={() => <LoginContainer/>}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => ({
    initializeAppThunk: () => {
        dispatch(initializeApp())
    },
})

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
    initialized: state.app.initialized
})

const AppContainer = compose<FC>(connect(mapStateToProps, mapDispatchToProps), withRouter)(App)

const SamurajJSApp = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        </Provider>
    )
}

export default SamurajJSApp
