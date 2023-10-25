import {useState} from 'react'
import { RegisterAPI } from '../api/AuthAPI'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Loader from './common/Loader';

function RegisterComponent() {
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      var res = await RegisterAPI(creds.email, creds.password);
      console.log(res)
      toast.success('Registered successfully', {})
      navigate('/home')
      } catch (err) {
        console.log(err);
        toast.error('An Error has occurred')
        setIsLoading(false)
      }
  }
  const [creds, setCreds] = useState();

  return (
    isLoading ? <Loader /> : (<div className='container'>
    <h2 className='heading'>Register on Codepen</h2>
    <form action="post">
    <div className='form-control'>
    <input onChange={(e) => setCreds({...creds, email: e.target.value})} className='common-input' placeholder='Enter your email' type="email"/>
    <input onChange={(e) => setCreds({...creds, password: e.target.value})} className='common-input' placeholder='Enter your passeord' type="password"/>
    </div>
    <button className='formButton' type='submit' onClick={register}>Register</button>
    </form>
    <p className='link_text'>Already a User ? <span><Link to="/">Login Now</Link></span></p>
  </div>)
  )
}

export default RegisterComponent