import { useState } from 'react';
import * as Api from '../api';
import '../styles/Login.css';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('You must login to use this app');

    const login = async (e) => {
        e.preventDefault();

        const response = await Api.user.login(username, password);

        if (response.status === 400) {
            setMessage((await response.json()).message);
        }
        else if (response.status === 200) {
            setToken((await response.json()).token);
        }
        else {
            setMessage('Something went wrong while logging in...');
        }
    }

    return (
        <div className='login'>

            <form onSubmit={ login } className='login-form'>
                <h1>{ message }</h1>

                <label htmlFor='username-input'>Username: </label>
                <input id='username-input' onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor='password-input'>Password: </label>
                <input id='password-input' onChange={(e) => setPassword(e.target.value)} type='password' />

                <br />
                <div className='login-form-controls'>
                    <button type='reset'>Reset</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export { Login };
