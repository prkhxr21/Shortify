import { useState } from 'react';
import propTypes from 'prop-types';
import { Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

const Output = ({ data, show }) => {
    console.log(data);
    const [copied, setCopied] = useState(false);
    var host = window.location.protocol + '//' + window.location.host;
    const handleCopy = (e) => {
        e.preventDefault();
        setCopied(true);
        navigator.clipboard.writeText(`${host}/${data}`);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };
    const showOrgDate = (orgDate) => {
        const date = new Date(orgDate);
        const dayNames = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const day = dayNames[date.getDay()];

        const dateString = date.toLocaleDateString();
        const timeString = date.toLocaleTimeString();
        return `${day}, ${dateString} ${timeString}`;
    };

    return (
        <>
            {show === 'URL' && (
                <p
                    required
                    style={{
                        borderRadius: '50px',
                        backgroundColor: '#4f46e5',
                        padding: '0.4em 1em',
                        color: '#ffffff',
                        textDecoration: 'underline',
                        border: 'none',
                        boxShadow: '0 0 10px 0 #00000050',
                    }}
                    // readOnly
                >
                    https://localhost:3000/
                    <span
                        style={{
                            color: '#ffffff',
                            fontWeight: 700,
                        }}
                    >
                        {data}
                    </span>
                    <button
                        onClick={(e) => {
                            handleCopy(e);
                        }}
                        style={{
                            marginLeft: '1rem',
                            borderRadius: '50%',
                            height: '40px',
                            width: '40px',
                            padding: '0.4em',
                            color: '#4f46e5',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 0 10px 0 #00000050',
                        }}
                    >
                        <ContentCopyIcon fontSize='24px' />
                    </button>
                </p>
            )}

            {copied && show === 'URL' && (
                <Alert
                    icon={<CheckIcon fontSize='inherit' />}
                    severity='success'
                >
                    ShortURL copied to clipboard successfully
                </Alert>
            )}

            {show === 'Analytics' && (
                <div
                    style={{
                        borderRadius: '50px',
                        backgroundColor: '#4f46e5',
                        padding: '0.4em 1em',
                        color: '#ffffff',
                        maxHeight: '500px',
                        overflowY: 'auto',
                        border: 'none',
                        boxShadow: '0 0 10px 0 #00000050',
                    }}
                >
                    <p
                        style={{
                            textDecoration: 'underline',
                        }}
                    >
                        Total Clicks: {data?.totalClicks}
                    </p>
                    <ul>
                        {data?.analytics.map((item, index) => (
                            <li key={index}>{showOrgDate(item.timestamp)}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

Output.propTypes = {
    data: propTypes.string,
    show: propTypes.string,
};

export default Output;
