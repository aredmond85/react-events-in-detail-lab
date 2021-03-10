import React from 'react';

export default class CoordinatesButton extends React.Component {

    handleOnClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>Coordinates</button>
            </div>
        );
    }
};