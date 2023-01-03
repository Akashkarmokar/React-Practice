import React from 'react';
import themeContext from '../Contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default class Content extends React.Component {
    render() {
        const { theme, switchTheme } = this.context;
        return (
            <div>
                <h2>This a content section</h2>
                <Counter
                    renderLogic={(counter, handleCounter) => (
                        <HoverCounter
                            counter={counter}
                            handleCounter={handleCounter}
                            theme={theme}
                            switchTheme={switchTheme}
                        />
                    )}
                />
            </div>
        );
    }
}

Content.contextType = themeContext;
