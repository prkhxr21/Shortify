import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import Cookie from 'js-cookie';
// import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Redirect from './pages/Redirect';
import SignIn from './pages/Authenticate';
// import { getUserWithToken } from './store/actions/userAction';

function App() {
    const access = window.localStorage.getItem('authorized');
    const [authorized, setAuthorized] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if (access === 'true') {
            setAuthorized(true);
            navigate('/shortURL');
        } else {
            setAuthorized(false);
        }
    }, [access]);
    // const { userDetails } = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const cookie = Cookie.get('access_token');
    //     if (
    //         cookie &&
    //         cookie !== 'undefined' &&
    //         cookie !== undefined &&
    //         cookie !== null
    //     ) {
    //         //dispathc event
    //         console.log('dispatching');
    //         dispatch(getUserWithToken());
    //     }
    //     if (
    //         userDetails !== null &&
    //         userDetails !== undefined &&
    //         userDetails !== 'undefined'
    //     ) {
    //         console.log('asdlaskdalskdm');
    //         setAuthorized(true);
    //         console.log('userDetails', userDetails);
    //     } else {
    //         setAuthorized(false);
    //     }
    // }, [dispatch, userDetails]);
    return (
        <>
            {authorized && <Navbar />}
            <Routes>
                <Route exact path='/*' element={<Redirect />} />
                <Route
                    path='/'
                    element={authorized ? <Home handle='URL' /> : <SignIn />}
                />
                <Route path='/shortURL' element={<Home handle='URL' />} />
                <Route
                    path='/analytics'
                    element={<Home handle='Analytics' />}
                />
            </Routes>
        </>
    );
}

export default App;
