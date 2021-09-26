import '../styles/Password.css';

const Password = ({ data, setSelectedPasswordData }) => {
    return (
        <div key={ data.id } className='password' onClick={() => setSelectedPasswordData(data)}>
            <h1>{ data.name }</h1>
            <h1>{ data.value }</h1>
        </div>
    )
}

const PasswordCard = ({ data }) => {
    if (!data) {
        return <div />;
    }
    return (
        <div className='password-card'>
            Selected!
        </div>
    )
}

export { Password, PasswordCard };
