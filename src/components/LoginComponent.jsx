import React, {useState} from 'react'
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI'
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  let navigate = useNavigate()
  const login = async (e) => {
    e.preventDefault()
    try {
    var res = await LoginAPI(creds.email, creds.password);
    console.log(res)
      toast.success('Logged in successfully', {})
      navigate('/home')
    } catch (err) {
      console.log(err);
      toast.error('Please check your credentials')
    }
  }
  const [creds, setCreds] = useState();

  const googleSignIn = () => {
      GoogleSignInAPI();

  }

  return (
    <>
      <form action="post">
      <div className='form-control'>
      <input onChange={(e) => setCreds({...creds, email: e.target.value})} className='common-input' placeholder='Enter your email' type="email"/>
      <input onChange={(e) => setCreds({...creds, password: e.target.value})} className='common-input' placeholder='Enter your passeord' type="password"/>
      </div>
      <button className='formButton' type='submit' onClick={login}>Login</button>
      </form>
      <div className="text-divider">or</div>
      <GoogleButton onClick={googleSignIn} type='dark' className='googleButton' />
      <p className='link_text'>New User ? <span><Link to="/register">Register Now</Link></span></p>
    </>
  )
}

export default LoginComponent
