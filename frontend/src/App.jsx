// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Redirect from './pages/Redirect';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home handle='URL' />} />
                <Route path='/shortURL' element={<Home handle='URL' />} />
                <Route
                    path='/analytics'
                    element={<Home handle='Analytics' />}
                />
                <Route exact path='/*' element={<Redirect />} />
            </Routes>
            {/* <Home /> */}
            {/* <div>
                <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank' rel='noreferrer'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p> */}
        </>
    );
}

export default App;
