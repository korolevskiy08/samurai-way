import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import {FC, SyntheticEvent} from 'react'

type FormDataType = {
  handleSubmit: (values: SyntheticEvent<HTMLFormElement>) => void
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={'input'} />
      </div>
      <div>
        <Field component={'input'} type={'checkbox'} name={'rememberMe'} /> Remember me
      </div>
      <div>
        <button type={'submit'}>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)

export const Login = () => {


  const onSubmit = (formData: FormDataType) => {

    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
