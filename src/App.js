import { useState } from 'react';
import Button from './Component/Button';
import ShowCount from './Component/ShowCount';
import Title from './Component/Title';

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementByOne = () => {
        setCount1((prevCount) => prevCount + 1);
    };
    const incrementByFive = () => {
        setCount2((prevCount) => prevCount + 5);
    };
    return (
        <div>
            <Title />
            <ShowCount count={count1} title="Count 1" />
            <Button handleClick={incrementByOne}>Increment By one</Button>
            <hr />
            <ShowCount count={count2} title="Count 2" />
            <Button handleClick={incrementByFive}>Increment By Five</Button>
        </div>
    );
}

export default App;
