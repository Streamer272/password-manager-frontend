import { useState } from 'react';
import { QueryControls } from '../components';
import '../styles/Home.css';

const Home = () => {
    const [passwords, setPasswords] = useState([]);

    const queryPasswords = (query) => {
        console.log(`Querying...`, query)
    }

    return (
        <div className='home'>
            <div className='container'>

            </div>
            <div className='container'>
                <QueryControls queryCallback={ queryPasswords } />
            </div>
        </div>
    )
}

export { Home };
