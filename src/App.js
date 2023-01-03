import React from 'react';
import ClickCounter from './Component/ClickCounter';
import Counter from './Component/Counter';
import Section from './Component/Section';
import User from './Component/User';
import ThemeContext from './Contexts/themeContext';

class App extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'dark',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <User render={(isLoggedIn) => (isLoggedIn ? 'Akash' : 'Unknown')} />
                <Counter
                    renderLogic={(counter, handleCounter) => (
                        <ClickCounter counter={counter} handleCounter={handleCounter} />
                    )}
                />
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
