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
    captcha: string
}

interface FormDataPropsType {
    captchaUrl: string | null
}

type MapDispatchToPropsType = {
    login: (data: ReqLoginType) => void
}

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        captchaUrl: state.auth.captcha,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        login: (data: ReqLoginType) => {
            console.log(data)
            dispatch(loginTC(data))
        }
    }
}

const LoginForm: FC<FormDataPropsType & InjectedFormProps<FormDataType, FormDataPropsType>> = ({handleSubmit, error, captchaUrl}) => {
    console.log(captchaUrl)
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
                {createField(styles.field, 'Login', 'login', Input, [required], 'input')}
                {createField(styles.field, 'Password', 'password', Input, [required], 'input')}
                <div className={styles.checkboxBlock}>
                    <Field component={Input} type={'checkbox'} name={'rememberMe'}/> <span>Remember me</span>
                </div>
                {error && <div className={styles.error}>{error}</div>}
                {captchaUrl &&<div>
                    <img src={captchaUrl} alt=""/>
                    {createField(styles.field, 'captcha', 'captcha', Input, [required], 'input')}
                </div>
                }

                <button className={styles.button} type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, FormDataPropsType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    login: (data: ReqLoginType) => void
    isAuth: boolean
    captchaUrl: string | null
}

export const Login: FC<LoginPropsType> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData: FormDataType) => {
        login({email: formData.login, password: formData.password, rememberMe: true, captcha: formData.captcha})
    }


    if (isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
