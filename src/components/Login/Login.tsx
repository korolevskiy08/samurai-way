import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {FC, SyntheticEvent} from 'react'
import {createField, Input} from "../../command/FormControl/FormControl";
import {required} from "../../command/utils/validators/validators";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../Redux/redux-store";
import {ReqLoginType} from "../../api/api";
import {loginTC} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './login.module.css'

type FormDataType = {
    handleSubmit: (values: SyntheticEvent<HTMLFormElement>) => void
    login: string
    password: string
    rememberMe: boolean
    error: string
}

type MapDispatchToPropsType = {
    login: (data: ReqLoginType) => void
}

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        login: (data: ReqLoginType) => {
            dispatch(loginTC(data))
        }
    }
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
                {createField(styles.field, 'Login', 'login', Input, [required])}
                {createField(styles.field, 'Password', 'password', Input, [required])}
                <div className={styles.checkboxBlock}>
                    <Field component={Input} type={'checkbox'} name={'rememberMe'}/> <span>Remember me</span>
                </div>
                {error && <div className={styles.error}>{error}</div>}
                    <button className={styles.button} type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    login: (data: ReqLoginType) => void
    isAuth: boolean
}

export const Login: FC<LoginPropsType> = ({login, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        login({email: formData.login, password: formData.password, rememberMe: true })
        console.log({email: formData.login, password: formData.password, rememberMe: true })
    }


    if (isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
