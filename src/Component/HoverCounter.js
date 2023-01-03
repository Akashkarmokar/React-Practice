export default function HoverCounter({ counter, handleCounter, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <h1 onMouseOver={handleCounter} style={style}>
                {' '}
                Hoverd {counter} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change theme
            </button>
        </div>
    );
}
