import { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');

    const handleClick = () => {
        // const countValue = e.target.value;
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        console.log('My component rendered');
        document.title = `Button is clicked ${count} time`;
        return () => {
            console.log('From 1st useEffect');
            console.log('My component is unmount 1');
        };
    }, [count]);

    const tick = () => {
        setDate(new Date());
    };
    useEffect(() => {
        console.log('Time is running');
        const interval = setInterval(tick, 1000);
        // Clean up interval
        return () => {
            console.log('My component is unmount 2');
            clearInterval(interval);
        };
    }, []);

    const textOnChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <p>Time is :{date.toLocaleTimeString()}</p>
            <p>{count}</p>
            <input value={text} onChange={textOnChange} />
            <br />
            <hr />
            <button type="button" onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}
