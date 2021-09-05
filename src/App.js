import { useState } from 'react';
import { Home, Login } from './routes';
import './styles/App.css';

const App = () => {
    const [tokenId, setTokenId] = useState(null);

    return (
        <div className='app'>
            { !tokenId && <Login setTokenId={ setTokenId } /> }
            { tokenId && <Home /> }
        </div>
    )
}

export { App };
