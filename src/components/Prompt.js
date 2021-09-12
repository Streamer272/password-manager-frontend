import { useState, useEffect, useRef } from 'react';
import '../styles/Prompt.css';

const Prompt = ({ finishCallback, active, children }) => {
    // FIXME

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const input1 = useRef();
    const input2 = useRef();

    useEffect(() => {
        // resetting input value
        if (active === true) {
            input1.current.value = '';
            input2.current.value = '';
        }
    }, [active]);

    return (
        <div className={ `${modalClassName} ${active ? 'active' : ''}` }>
            <form className={ modalWindowClassName } onSubmit={(e) => e.preventDefault()}>
                { children }

                <div className='button-container' style={{marginTop: '1rem'}}>
                    <button onClick={() => finishCallback(true)} type='submit'>Ok</button>
                    <button onClick={() => finishCallback(false)} type='submit'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export { Prompt }
