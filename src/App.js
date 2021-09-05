import { useState, useEffect } from 'react';
import { Home, Login } from './routes';
import './styles/App.css';

const App = () => {
    const [tokenId, setTokenId] = useState(parseInt(localStorage.getItem('tokenId')) || null);

    useEffect(() => {
        if (tokenId) {
            localStorage.setItem('tokenId', tokenId.toString());
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
