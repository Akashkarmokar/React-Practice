import React from 'react';

export default class Todo extends React.Component {
    state = {
        todo: '',
        warning: null,
    };

    handleChange = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'You need Javascript skill to complete the task.Do you have it?'
            : null;
        this.setState({
            todo: inputValue,
            warning,
        });
    };

    render() {
        const { todo, warning } = this.state;
        return (
            <div>
                <p>{todo}</p>
                <p>
                    <textarea value={todo} onChange={this.handleChange} />
                </p>
                <hr />
                <h2>{warning || 'Good Choice'}</h2>
            </div>
        );
    }
}
