import { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('You must login to use this app');

    const login = (e) => {
        e.preventDefault();
    }

    return (
        <div className='login'>

            <form onSubmit={ login } className='login-form'>
                <h1>{ message }</h1>

                <label htmlFor='username-input'>Username: </label>
                <input id='username-input' onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor='password-input'>Password: </label>
                <input id='password-input' onChange={(e) => setPassword(e.target.value)} />

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
