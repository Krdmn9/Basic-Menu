import './NameBox.css';
import { useState } from 'react';

export default function NameBox() {
    const [enteredName, setEnteredName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isNameValid, setIsNameValid] = useState(true);

    function submitHandler() {
        const regex = /^[a-zA-Z\s]*$/;
        const isValid = regex.test(enteredName);
        setIsNameValid(isValid);
        if (isValid) {
            setIsLoggedIn(true);
        }
        else {
            setEnteredName('');
        }
    }

    function nameHandler(e) {
        setEnteredName(e.target.value);
    }

    return (
        <div id="input-box">
            {isLoggedIn && (
                <div>Welcome, {enteredName}</div>
            )}
            {!isLoggedIn && (
                <div>
                    Please enter your name for a personalized experience:
                    <input value={enteredName} onChange={nameHandler} id="input" />
                    <button id="submit" style={{ backgroundColor: isNameValid ? '#908f8f' : '#FF4545' }} onClick={submitHandler}>
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
}
