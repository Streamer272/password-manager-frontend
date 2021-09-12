import Add from '../images/add.png';
import '../styles/AddPassword.css';

const AddPassword = ({ token }) => {
    const promptCallback = () => {

    }

    const prompt = () => {
        console.log(`prompted`)
    }

    return (
        <div className='add-password'>
            <button onClick={ prompt }>
                <img src={ Add } alt='Add' />
            </button>
        </div>
    )
}

export { AddPassword };
