import { useState, useEffect } from 'react';
import { Home, Login } from './routes';
import './styles/App.css';

const App = () => {
    const [tokenId, setTokenId] = useState(parseInt(sessionStorage.getItem('tokenId')) || null);

    useEffect(() => {
        if (tokenId) {
            sessionStorage.setItem('tokenId', tokenId.toString());
        }
    }, [tokenId]);

    return (
        <div className='app'>
            { !tokenId && <Login setTokenId={ setTokenId } /> }
            { tokenId && <Home /> }
        </div>
    )
}

export { App };
