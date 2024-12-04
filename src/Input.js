import React from "react";

class Input extends React.Component {
    render() {
        const { onChangeLocation, location } = this.props;
        return (
            <div>
                <input type="text"
                    placeholder='Search from location...'
                    value={location}
                    onChange={e => onChangeLocation(e)}
                />
            </div>
        )
    }
} export default Input;