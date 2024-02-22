import propTypes from 'prop-types';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { createShortUrl, getAnalyticsAction } from '../store/actions/urlAction';
import { useDispatch, useSelector } from 'react-redux';
import Output from './Output';
import { Link } from 'react-router-dom';

const InputHandler = ({ handle }) => {
    const { shortId, analytics, isLoading, isError } = useSelector(
        (state) => state.url
    );
    const dispatch = useDispatch();
    function isValidURL(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const url = data.get('url');
        if (!url || url.trim().length === 0)
            return alert('Please enter a valid URL');
        if (handle === 'URL') {
            if (!isValidURL(url)) {
                alert('Please enter a valid URL');
            } else {
                dispatch(createShortUrl(url));
            }
        }
        if (handle === 'Analytics') {
            const shortId = url.split('/').pop();
            dispatch(getAnalyticsAction(shortId));
        }
    };
    
    // console.log(shortId, analytics, isLoading, isError);
    if (isError === true) {
        return <h1>Something went wrong</h1>;
    }
    return (
        <Container
            component='main'
            maxWidth='xs'
            sx={{
                backgroundColor: '#ffffff',
                padding: '0.1rem',
                borderRadius: '0 0 0.4rem 0.4rem',
                boxShadow: '0 10px 10px #00000050',
            }}
        >
            {/* <div> */}
            <Typography
                variant='h6'
                noWrap
                component='p'
                sx={{
                    marginTop: 2,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'monospace',
                    textDecoration: 'none',
                }}
            >
                Just One Click Away
            </Typography>

            <Box
                sx={{
                    marginBottom: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
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
                        id='url'
                        placeholder={
                            handle === 'URL'
                                ? 'https://enter.your.url'
                                : 'https://enter.your.shorturl'
                        }
                        name='url'
                        autoFocus
                        sx={{
                            outline: 'none',
                            border: '2px solid #4f46e5',
                            borderRadius: '.4rem',
                        }}
                    />
                    <Button
                        type='submit'
                        // fullWidth
                        variant='contained'
                        sx={{ mt: 2, mb: 3 }}
                    >
                        {handle === 'URL'
                            ? 'Create Magic ✨'
                            : 'Get Analytics 📈'}
                    </Button>
                    <Grid container sx={{ mb: 2 }}>
                        <Grid item xs>
                            {handle === 'URL' ? (
                                <Link to='/analytics' variant='body2'>
                                    Get Analytics
                                </Link>
                            ) : (
                                <Link to='/' variant='body2'>
                                    Get Short URL
                                </Link>
                            )}
                        </Grid>
                        {/* <Grid item>
                                <Link href='#' variant='body2'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid> */}
                    </Grid>
                    <Grid container>
                        {isLoading === true && (
                            <Grid item xs>
                                <Box>
                                    <CircularProgress />
                                </Box>
                            </Grid>
                        )}
                        {shortId !== null && (
                            <Grid item xs>
                                <Output show='URL' data={shortId} />
                            </Grid>
                        )}
                        {analytics !== null && (
                            <Grid item xs>
                                <Output show='Analytics' data={analytics} />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

InputHandler.propTypes = {
    handle: propTypes.string.isRequired,
};
export default InputHandler;
