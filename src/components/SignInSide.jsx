import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {alpha, createTheme, getContrastRatio, ThemeProvider} from '@mui/material/styles';
import GoogleButton from "react-google-button";
import {useNavigate} from "react-router-dom";
import {GoogleSignInAPI, LoginAPI} from "../api/AuthAPI.jsx";
import {toast} from "react-toastify";
import {useState} from "react";
import LoginComponent from "./LoginComponent.jsx";

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

const defaultTheme = createTheme({
    palette: {
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
});

export default function SignInSide() {
    const [creds, setCreds] = useState();

    let navigate = useNavigate()
    const login = async (e) => {
        e.preventDefault()
        try {
            let res = await LoginAPI(creds.email, creds.password);
            console.log(res)
            toast.success('Logged in successfully', {})
            navigate('/home')
        } catch (err) {
            console.log(err);
            toast.error('Please check your credentials')
        }
    }

    const googleSignIn = () => {
        GoogleSignInAPI();

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <div style={{position: "absolute", backgroundColor: "#0a0a0a82", width: "100vw", height: "100vh", zIndex: 2}}>
            </div>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid style={{zIndex: 10}} bgcolor={'#1a1a1a'} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography color={'white'} component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <LoginComponent />
                        {/*<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>*/}
                        {/*    <TextField*/}
                        {/*        margin="normal"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="email"*/}
                        {/*        label="Email Address"*/}
                        {/*        name="email"*/}
                        {/*        autoComplete="email"*/}
                        {/*        autoFocus*/}
                        {/*    />*/}
                        {/*    <TextField*/}
                        {/*        margin="normal"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        name="password"*/}
                        {/*        label="Password"*/}
                        {/*        type="password"*/}
                        {/*        id="password"*/}
                        {/*        autoComplete="current-password"*/}
                        {/*    />*/}
                        {/*    <Button*/}
                        {/*        type="submit"*/}
                        {/*        fullWidth*/}
                        {/*        variant="contained"*/}
                        {/*        sx={{ mt: 3, mb: 2 }}*/}
                        {/*    >*/}
                        {/*        Sign In*/}
                        {/*    </Button>*/}
                        {/*    <Grid container>*/}
                        {/*        <Grid item xs>*/}
                        {/*            <Link href="#" variant="body2">*/}
                        {/*                Forgot password?*/}
                        {/*            </Link>*/}
                        {/*        </Grid>*/}
                        {/*        <Grid item>*/}
                        {/*            <Link href="#" variant="body2">*/}
                        {/*                {"Don't have an account? Sign Up"}*/}
                        {/*            </Link>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}
                        {/*</Box>*/}
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
