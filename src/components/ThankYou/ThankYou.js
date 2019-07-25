import React, { Component } from 'react';

class ThankYou extends Component {
    handleClick = () => {
        console.log(`Lets go to FeelingOne`);
        console.log('this.props', this.props);

        // programmatically go to FeelingOne
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Feedback!</h1>
                </header>
                <h2>Thank You!</h2>
                <br />
                    <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        );
    }
}

export default ThankYou;