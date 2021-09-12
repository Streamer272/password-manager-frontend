import { useState } from 'react';
import { Password, QueryControls } from '../components';
import * as Api from '../api';
import '../styles/Home.css';

const Home = ({ token }) => {
    const [passwords, setPasswords] = useState([]);

    const queryPasswords = async (query) => {
        const response = await Api.password.queryPasswordsByName(query, token);
        console.log(`got them response `, await response.json())
        // setPasswords(await response.json())
    }

    return (
        <div className='home'>
            <div className='container'>
                { passwords.map(data => <Password data={ data } />) }
            </div>
            <div className='container'>
                <QueryControls queryCallback={ queryPasswords } />
            </div>
        </div>
    )
}

export { Home };
