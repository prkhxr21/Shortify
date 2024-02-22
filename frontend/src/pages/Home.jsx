import { Typography } from '@mui/material';
import propTypes from 'prop-types';
import InputHandler from '../components/Input';

const Home = ({ handle }) => {
    return (
        <>
            <Typography
                variant='h6'
                noWrap
                component='p'
                sx={{
                    marginTop: '4rem',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'monospace',
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    color: '#000',
                    fontWeight: 'bold',
                    backgroundColor: '#D3DD2C',
                }}
            >
                {handle === 'URL'
                    ? 'Create your own ShortURL'
                    : 'Get URL Analytics'}
            </Typography>
            <InputHandler handle={handle} />
        </>
    );
};

Home.propTypes = {
    handle: propTypes.string,
};

export default Home;
