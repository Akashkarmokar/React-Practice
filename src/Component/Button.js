export default function Button({ handleClick, children }) {
    console.log(`Rendering button ${children}`);
    return (
        <p>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </p>
    );
}
