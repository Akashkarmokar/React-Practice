export default function Text({ addEmojiHandler, addBracket }) {
    let text = 'I am javascript programmer';
    if (addEmojiHandler) {
        text = addEmojiHandler(text, ':)');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>;
}
