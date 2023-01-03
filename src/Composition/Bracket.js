import React from 'react';

export default class Bracket extends React.Component {
    addBracketHandler = (text) => `[${text}]`;

    render() {
        const { children } = this.props;
        return children(this.addBracketHandler);
    }
}
