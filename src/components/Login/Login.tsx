import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {FC, SyntheticEvent} from 'react'
import {Input} from "../../command/FormControl/FormControl";
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
                <Field className={styles.field} placeholder={'Login'} name={'login'} component={Input}
                       validate={[required]}/>
                <Field className={styles.field} placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
                <div className={styles.checkboxBlock}>
                    <Field component={Input} type={'checkbox'} name={'rememberMe'}/> <span>Remember me</span>
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <div>
                    <button className={styles.button} type={'submit'}>Login</button>
                </div>
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
        login({email: formData.login, rememberMe: true, password: formData.password, captcha: true})
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


export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
