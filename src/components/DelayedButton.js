import React from 'react';

export default class DelayedButton extends React.Component {

    handleOnClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)

        }, this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>
                    Delayed
                </button>
            </div>
        );
    }
}