import React from 'react';
import { convert, toCelsius, toFarenheit } from '../lib/converter';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleTemperatureChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const farenheit = scale === 'c' ? convert(temperature, toFarenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    handleTemperatureChange={this.handleTemperatureChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={farenheit}
                    handleTemperatureChange={this.handleTemperatureChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}
