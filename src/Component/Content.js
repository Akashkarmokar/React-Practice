import themeContext from '../Contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    return (
        <div>
            <h2>This a content section</h2>
            <Counter
                renderLogic={(counter, handleCounter) => (
                    <themeContext.Consumer>
                        {({ theme, switchTheme }) => (
                            <HoverCounter
                                counter={counter}
                                handleCounter={handleCounter}
                                theme={theme}
                                switchTheme={switchTheme}
                            />
                        )}
                    </themeContext.Consumer>
                )}
            />
        </div>
    );
}
