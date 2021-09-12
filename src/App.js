import { useState, useEffect } from 'react';
import { Home, Login } from './routes';
import './styles/App.css';

const App = () => {
    const [token, setToken] = useState(parseInt(localStorage.getItem('token')) || null);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token.toString());
        }
    }, [token]);

    return (
        <div className='app'>
            { !token && <Login setToken={ setToken } /> }
            { token && <Home token={ token } /> }
        </div>
    )
}

export { App };
