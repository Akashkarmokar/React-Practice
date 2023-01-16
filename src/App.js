// import Calculator from './Component/Calculator';
import { useState } from 'react';
import MyComponent from './Component/MyComponent';

function App() {
    const [isShow, setShow] = useState(true);
    return (
        <div>
            {/* <Calculator /> */}
            <div>{isShow && <MyComponent />}</div>
            <button type="button" onClick={() => setShow((preIsShowValue) => !preIsShowValue)}>
                {isShow ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

export default App;
