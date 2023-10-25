import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import LoginComponent from '../components/LoginComponent'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'
import SignInSide from "../components/SignInSide.jsx";

function Login() {
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if(res?.accessToken) {
        navigate('/home')
      } else {
        setIsLoading(false)
      }
    })
  }, [])

  return (
    isLoading ? <Loader /> : <SignInSide />
  )
}

export default Login
