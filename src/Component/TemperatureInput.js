import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit',
};

export default class TemperatureInput extends React.Component {
    render() {
        const { scale, temperature, handleTemperatureChange } = this.props;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}</legend>
                    <input
                        type="text"
                        value={temperature}
                        onChange={(e) => handleTemperatureChange(e, scale)}
                    />
                </fieldset>
            </div>
        );
    }
}
