import React from 'react';
import ClickCounter from './Component/ClickCounter';
import Counter from './Component/Counter';
import Section from './Component/Section';
import User from './Component/User';
import ThemeContext from './Contexts/themeContext';

class App extends React.Component {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;

        return (
            <div>
                <h1>Hello world</h1>
                <User render={(isLoggedIn) => (isLoggedIn ? 'Akash' : 'Unknown')} />
                <Counter
                    renderLogic={(counter, handleCounter) => (
                        <ClickCounter counter={counter} handleCounter={handleCounter} />
                    )}
                />
                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
