export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <div>The water would boil.</div>;
    }
    return <div>Water would not boil.</div>;
}
