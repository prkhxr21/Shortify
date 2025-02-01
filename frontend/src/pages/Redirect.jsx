import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLongUrlAction } from '../store/actions/urlAction';

const Redirect = () => {
    const dispatch = useDispatch();
    const { longUrl } = useSelector((state) => state.url);
    useEffect(() => {
        const fetchOriginalUrl = async () => {
            try {
                const id = window.location.pathname.substring(1); 
                dispatch(getLongUrlAction(id));
            } catch (error) {
                console.error('Error fetching original URL:', error);
            }
        };

        fetchOriginalUrl();
    }, [dispatch]);

    useEffect(() => {
        if (longUrl !== null) {
            setTimeout(() => {
                window.location.href = longUrl;
            }, 100);
        }
    }, [longUrl]);

    return <div>Redirecting</div>;
};

export default Redirect;
