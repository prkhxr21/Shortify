import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Cookies from 'js-cookie';
// import { addNewUser } from '../store/actions/userAction';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { CircularProgress } from '@mui/material';

function Copyright(props) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {'Copyright © '}
            <Link color='inherit' href='https://shubhamingole.me/'>
                shubhamingole.me
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignIn() {
    // const { userDetails, isLoading, isError } = useSelector(
    //     (state) => state.user
    // );
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // const user = {
        //     email: data.get('email'),
        //     password: data.get('password'),
        // };
        // dispatch(addNewUser(user));
        if (
            data.get('email') === 'user@email.com' &&
            data.get('password') === 'User@123'
        ) {
            window.localStorage.setItem('authorized', 'true');
            navigate('/shortURL');
            setError(false);
        } else {
            setError(true);
        }
    };

    // useEffect(() => {
    //     const expiry = rememberMe === true ? 7 : 1;
    //     if (
    //         userDetails !== null &&
    //         userDetails?.token !== undefined &&
    //         userDetails?.token !== 'undefined'
    //     ) {
    //         Cookies.set('access_token', userDetails?.token, {
    //             expires: expiry,
    //         });
    //     }
    // }, [rememberMe, userDetails]);

    // console.log(userDetails, isLoading, isError);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container
                component='main'
                maxWidth='xs'
                sx={{
                    backgroundColor: '#fff',
                    padding: '0.1rem',
                    borderRadius: '0.4rem',
                    boxShadow: '0 10px 10px #00000050',
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Box
                        component='form'
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            // label='Email Address'
                            placeholder='user@email.com'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            // label='Password'
                            placeholder='User@123'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value='remember' color='primary' />
                            }
                            onChange={() => {
                                setRememberMe(!rememberMe);
                            }}
                            label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {
                                    //userDetails !== null &&
                                    //userDetails?.code === 400 &&
                                    error === true && (
                                        <Typography
                                            component='p'
                                            variant='p'
                                            color={'red'}
                                        >
                                            {/* {userDetails.message} */}
                                            please use given credentials
                                        </Typography>
                                    )
                                }
                            </Grid>
                            {/* <Grid item>
                                <Link href='#' variant='body2'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
