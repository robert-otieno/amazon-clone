import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (event) => {
    event.preventDefault() // this stops the refresh
    // do the login logic...
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      // logged in, redirect to homepage
      navigate('/')
    })
    .catch((e)=> alert(e.message))
  }

  const register = (event) => {
    event.preventDefault() // this stops the refresh
    // do the register logic
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // create a user andlogged in, redirect to homepage
      navigate('/')
    })
    .catch((e)=> alert(e.message))
  }

  return (
    <div className='login'>
        <Link to='/'>
          <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="" />
        </Link>

        <div className="login__container">
          <h1>Sign In</h1>
          <form action="">
            <h5>E-mail</h5>
            <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
            <h5>Password</h5>
            <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
            <button type='submit' onClick={login} className='login__signInButton'>Sign In</button>
          </form>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button onClick={register}  className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
