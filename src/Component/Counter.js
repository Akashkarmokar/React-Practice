import React from 'react';

export default class Counter extends React.Component {
    state = {
        counter: 0,
    };

    handleCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    render() {
        const { renderLogic } = this.props;
        const { counter } = this.state;

        return renderLogic(counter, this.handleCounter);
    }
}
