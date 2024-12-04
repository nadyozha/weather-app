import React from 'react';
import Day from './Day';

class Weather extends React.Component {
    render() {
        const { temperature_2m_max: max, temperature_2m_min: min, time: dates, weathercode: codes } = this.props.weather;

        return (
            <div>
                <h2>{this.props.location}</h2>
                <ul className='weather'>
                    {dates.map((item, i) => (
                        <Day key={item}
                            max={max[i]}
                            min={min[i]}
                            date={item}
                            code={codes[i]}
                            isToday={i === 0} />)
                    )}
                </ul>
            </div>
        )
    }
} export default Weather;