import { useState } from 'react';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import './styles/App.css';

const App = () => {
    const [tokenId, setTokenId] = useState(null);

    return (
        <div className='app'>
            { !tokenId && <Login /> }
            { tokenId && <Home /> }
        </div>
    )
}

export { App };
