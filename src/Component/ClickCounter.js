export default function ClickCounter({ counter, handleCounter }) {
    return (
        <div>
            <button type="button" onClick={handleCounter}>
                Clicked {counter} times
            </button>
        </div>
    );
}
