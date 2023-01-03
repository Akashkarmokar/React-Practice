import React from 'react';

/**
 * Higher Order Componet.
 * It take a component which need single counter.
 */
const withCounter = (OriginalComponent) => {
    class newComponent extends React.Component {
        state = {
            counter: 0,
        };

        handleCounterValue = () => {
            this.setState((prevState) => ({ counter: prevState.counter + 1 }));
        };

        render() {
            const { counter } = this.state;
            return (
                <OriginalComponent counter={counter} handleClickCounter={this.handleCounterValue} />
            );
        }
    }

    return newComponent;
};

export default withCounter;
