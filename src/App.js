import ClickCounter from './Component/ClickCounter';
import Counter from './Component/Counter';
import HoverCounter from './Component/HoverCounter';
import User from './Component/User';

function App() {
    // const quantities = [1, 2, 3];
    return (
        <div>
            <h1>Hello world</h1>
            <User render={(isLoggedIn) => (isLoggedIn ? 'Akash' : 'Unknown')} />
            <Counter
                renderLogic={(counter, handleCounter) => (
                    <ClickCounter counter={counter} handleCounter={handleCounter} />
                )}
            />
            <Counter
                renderLogic={(counter, handleCounter) => (
                    <HoverCounter counter={counter} handleCounter={handleCounter} />
                )}
            />
        </div>
    );
}

export default App;
