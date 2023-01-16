import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
            ? 'You need Javascript skill to complete the task.Do you have it?'
            : null;
        setTodo(inputValue);
        setWarning(updatedWarning);
    };
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea value={todo} onChange={handleChange} />
            </p>
            <hr />
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    );
}
