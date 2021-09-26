import { useEffect, useState, useCallback } from 'react';
import {
    Password,
    QueryControls,
    AddPassword, PasswordCard
} from '../components';
import * as Api from '../api';
import '../styles/Home.css';

const Home = ({ token }) => {
    const [passwords, setPasswords] = useState([]);
    const [selectedPasswordData, setSelectedPasswordData] = useState(null);

    const queryPasswords = useCallback(async (query = '') => {
        const response = await Api.password.queryPasswordsByName(query, token);
        setPasswords(await response.json());
    }, [token]);

    useEffect(queryPasswords, [queryPasswords]);

    return (
        <div className='home'>
            <div className='container'>
                { passwords.map(data => <Password data={ data } setSelectedPasswordData={ setSelectedPasswordData } />) }
            </div>
            <div className='container'>
                <QueryControls queryCallback={ queryPasswords } />

                <PasswordCard data={ selectedPasswordData } />

                <AddPassword token={ token } />
            </div>
        </div>
    )
}

export { Home };
