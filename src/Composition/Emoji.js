import React from 'react';

export default class Emoji extends React.Component {
    addEmojiHandler = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        const { children } = this.props;
        return children(this.addEmojiHandler);
    }
}
