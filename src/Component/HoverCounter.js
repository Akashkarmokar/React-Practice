export default function HoverCounter({ counter, handleCounter }) {
    return (
        <div>
            <h1 onMouseOver={handleCounter}> Hoverd {counter} times</h1>
        </div>
    );
}
