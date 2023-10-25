import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Container = styled(AppBar)`
background: #010E12;
height: 6vh;
`


export default function Header() {
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
      toast.success('Successfully logged out !')
    })
  }

  return (
    <>
        <Container position='static'>
            <Toolbar className='toolBar'>
              <CodeOffIcon fontSize='large' />
              <button onClick={handleLogout} className='formButton logout'> <span className='logoutIcon'><LogoutIcon/></span>Logout</button>
            </Toolbar>
        </Container>
    </>
  )
}
