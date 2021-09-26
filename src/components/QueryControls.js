import { useState } from 'react';
import '../styles/QueryControls.css';

const QueryControls = ({ queryCallback }) => {
    const [query, setQuery] = useState('');

    const onSubmit = (e) => {
        e?.preventDefault();
        queryCallback(query);
    }

    return (
        <form onSubmit={ onSubmit }>
            <label htmlFor='query-controls-form-input'>Password name: </label>
            <input onChange={e => setQuery(e.target.value)} id='query-controls-form-input' />

            <button type='submit'>Ok</button>
        </form>
    )
}

export { QueryControls };
